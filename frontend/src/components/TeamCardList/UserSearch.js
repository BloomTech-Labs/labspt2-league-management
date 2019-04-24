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
    width: 400
  },
  container: {
    position: 'relative'
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
    flex: 1
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

class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      single: '',
      users: [],
      suggestions: [],
      coach_email: ''
    };
    this.renderSearchComponent = this.renderSearchComponent.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.getSearchSuggestions = this.getSearchSuggestions.bind(this);
    this.renderSearchComponent = this.renderSearchComponent.bind(this);
  }

  endpoint = '/search';

  componentDidMount() {
      axios
        .get('/search/users')
        .then(response => {
          this.setState({
            users: response.data
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

  renderSuggestion(user, { query, isHighlighted }) {
    const matches = match(user.email, query);
    const parts = parse(user.email, matches);

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
      : this.state.users.filter(user => {
          const keep =
            count < 5 &&
            user.email.slice(0, inputLength).toLowerCase() === searchValue;

          if (keep) {
            count += 1;
          }

          return keep;
        });
  }

  getSuggestionValue(user) {
    return user.email;
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

  // handleChange = name => (event, { newValue }) => {
  //   this.setState({
  //     [name]: newValue
  //   });
  //   console.log('newValue in UserSearch', newValue);
  // };

  handleSubmit = async e => {
    e.preventDefault();
    console.log('this.state.coach_email', this.state.coach_email);
    await this.setState({
      coach_email: this.state.coach_email
    });
    await console.log(this.state.coach_email);
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
      <form>
        {/* // <form onSubmit={this.props.handleSubmit}> */}
        <Paper className={classes.root}>
          <Autosuggest
            {...autosuggestProps}
            inputProps={{
              classes,
              //   placeholder: '',
              value: this.props.coach_email,
              // onChange: this.props.InputHandler
              onChange: this.props.handleChange('coach_email')
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
                // onClick={this.handleSubmit}
              >
                {options.children}
              </Paper>
            )}
          />
        </Paper>
      </form>
    );
  }
}

UserSearch.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(UserSearch));
