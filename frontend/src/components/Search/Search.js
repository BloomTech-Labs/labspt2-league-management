import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    margin: '0 auto',
    padding: '2px 4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 400,
    [theme.breakpoints.down('sm')]: {
      width: 200
    },
    [theme.breakpoints.down('xs')]: {
      width: 200
    }
  },
  container: {
    position: 'relative',
    width: '100%'
  },
  divider: {
    width: 2,
    height: 28,
    margin: 4
  },
  input: {
    border: 'none',
    outline: 'none',
    marginLeft: 8,
    flex: 1,
    width: '100%',
    fontSize: '1.2rem'
  },
  iconButton: {
    padding: 10
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  suggestion: {
    display: 'block'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  }
});

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      single: '',
      publicLeagues: [],
      suggestions: []
    };
    this.renderSearchComponent = this.renderSearchComponent.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.getSearchSuggestions = this.getSearchSuggestions.bind(this);
    this.renderSearchComponent = this.renderSearchComponent.bind(this);
  }

  endpoint = '/search';

  componentDidMount() {
    axios
      .get(this.endpoint)
      .then(response => {
        this.setState({
          publicLeagues: response.data
        });
      })
      .catch(error => console.log(error));
  }

  renderSearchComponent(inputProps) {
    const { classes, inputRef = () => {}, ref, ...other } = inputProps;

    return (
      <>
        <TextField
          fullWidth
          InputProps={{
            inputRef: node => {
              ref(node);
              inputRef(node);
            },
            classes: {
              input: classes.input
            }
          }}
          {...other}
        />
      </>
    );
  }

  renderSuggestion(league, { query, isHighlighted }) {
    const matches = match(league.name, query);
    const parts = parse(league.name, matches);

    return (
      <MenuItem selected={isHighlighted} component="div">
        <div>
          {parts.map((part, index) =>
            part.highlight ? (
              <span key={String(index)} style={{ fontWeight: 500 }}>
                {part.text}
              </span>
            ) : (
              <strong key={String(index)} style={{ fontWeight: 300 }}>
                {part.text}
              </strong>
            )
          )}
        </div>
      </MenuItem>
    );
  }

  getSearchSuggestions(value) {
    const searchValue = deburr(value.trim()).toLowerCase();
    const inputLength = searchValue.length;
    let count = 0;

    return inputLength === 0
      ? []
      : this.state.publicLeagues.filter(league => {
          const keep =
            count < 5 &&
            league.name.slice(0, inputLength).toLowerCase() === searchValue;

          if (keep) {
            count += 1;
          }

          return keep;
        });
  }

  getSuggestionValue(league) {
    return league.name;
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSearchSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.state.single;
    const lName = this.state.single;
    if (this.state.publicLeagues.find(x => x.name === lName)) {
      const lid = this.state.publicLeagues.find(x => x.name === lName).id;
      await this.props.history.push({
        pathname: `/publicSchedule/${lid}/${lName.replace(
          /[^a-zA-Z0-9]/g,
          '-'
        )}`,
        state: {
          publicLeagues: this.state.publicLeagues,
          lid
        }
      });
    }
  };

  render() {
    const { classes } = this.props;

    const autosuggestProps = {
      renderSearchComponent: this.renderSearchComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue: this.getSuggestionValue,
      renderSuggestion: this.renderSuggestion
    };

    return (
      <form onSubmit={this.handleSubmit}>
        <Paper className={classes.root}>
          <Autosuggest
            {...autosuggestProps}
            inputProps={{
              classes,
              placeholder: 'Search Leagues',
              value: this.state.single,
              onChange: this.handleChange('single')
            }}
            theme={{
              container: classes.container,
              suggestionsContainerOpen: classes.suggestionsContainerOpen,
              suggestionsList: classes.suggestionsList,
              suggestion: classes.suggestion,
              input: classes.input
            }}
            renderSuggestionsContainer={options => (
              <Paper
                {...options.containerProps}
                square
                onClick={this.handleSubmit}
              >
                {options.children}
              </Paper>
            )}
          />
          <IconButton
            className={classes.iconButton}
            type="submit"
            aria-label="Search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </form>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(SearchBar));
