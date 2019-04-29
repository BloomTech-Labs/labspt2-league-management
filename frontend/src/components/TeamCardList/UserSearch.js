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

const styles = theme => ({
  root: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    backgroundColor: '#E2ECF7',
    height: '60px',
    marginTop: '10px',
    marginBottom: '-5px',
    border: 'none'
  },
  container: {
    position: 'relative',
    width: '100%',
    boxSizing: 'border-box',
    height: '60px'
  },
  input: {
    width: '100%',
    padding: '15px',
    borderRadius: 6,
    boxShadow: '1px 1px 2px #333, 2px 2px 3px #1565c0cc',
    color: '#333',
    fontFamily: 'Monserrat',
    fontSize: '1.0rem',
    fontWeight: 100,
    backgroundColor: '#E2ECF7',
    boxSizing: 'border-box',
    border: '1px solid #A5AEB7'
  },
  suggestionsContainerOpen: {
    // Whole Container
    position: 'absolute',
    zIndex: 2,
    marginTop: '5px',
    left: 0,
    right: 0,
    width: '100%',
    minWidth: '245px'
  },
  suggestion: {
    //Each Suggestion in List
    display: 'block',
    width: '100%',
    // minWidth: '250px',
    background: 'white'
  },
  suggestionsList: {
    //Suggestions List this over Container Open
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  label: {
    fontFamily: 'Monserrat',
    fontSize: '0.9rem',
    color: '#333',
    textAlign: 'center',
    position: 'absolute',
    top: -7,
    left: 10,
    width: '80px',
    height: '20px',
    display: 'flex',
    backgroundColor: '#E2ECF7',
    paddingLeft: '5px',
    justifyContent: 'center'
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
          InputProps={{
            inputRef: node => {
              ref(node);
              inputRef(node);
            },
            classes: {
              input: classes.input
            },
            style: {
              color: '#333',
              fontFamily: 'Monserrat, sans-serif',
              fontSize: '1.0rem',
              fontWeight: 100
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
              <span key={String(index)} style={{ fontWeight: 800 }}>
                {part.text}
              </span>
            ) : (
              <span key={String(index)} style={{ fontWeight: 300 }}>
                {part.text}
              </span>
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

  handleSubmit = async e => {
    e.preventDefault();
    await this.setState({
      coach_email: this.state.coach_email
    });
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
      <div className={classes.root}>
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            value: this.props.coach_email,
            onChange: this.props.handleChange('coach_email'),
            style: {
              fontFamily: 'Monserrat, sans-serif',
              fontSize: '1.0rem',
              fontWeight: 100
            }
          }}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion,
            input: classes.input
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} fullWidth>
              {options.children}
            </Paper>
          )}
        />
        <div className={classes.label}>Coach Email</div>
      </div>
    );
  }
}

UserSearch.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(UserSearch));
