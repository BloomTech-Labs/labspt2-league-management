import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

// const leagues = [
//   { name: 'Afghanistan' },
//   { name: 'Aland Islands' },
//   { name: 'Albania' },
//   { name: 'Algeria' },
//   { name: 'American Samoa' },
//   { name: 'Andorra' },
//   { name: 'Angola' },
//   { name: 'Anguilla' },
//   { name: 'Antarctica' },
//   { name: 'Antigua and Barbuda' },
//   { name: 'Argentina' },
//   { name: 'Armenia' },
//   { name: 'Aruba' },
//   { name: 'Australia' },
//   { name: 'Austria' },
//   { name: 'Azerbaijan' },
//   { name: 'Bahamas' },
//   { name: 'Bahrain' },
//   { name: 'Bangladesh' },
//   { name: 'Barbados' },
//   { name: 'Belarus' },
//   { name: 'Belgium' },
//   { name: 'Belize' },
//   { name: 'Benin' },
//   { name: 'Bermuda' },
//   { name: 'Bhutan' },
//   { name: 'Bolivia, Plurinational State of' },
//   { name: 'Bonaire, Sint Eustatius and Saba' },
//   { name: 'Bosnia and Herzegovina' },
//   { name: 'Botswana' },
//   { name: 'Bouvet Island' },
//   { name: 'Brazil' },
//   { name: 'British Indian Ocean Territory' },
//   { name: 'Brunei Darussalam' }
// ];
const styles = theme => ({
  root: {
    height: 250,
    flexGrow: 1,
    width: 400
  },
  roots: {
    margin: '0 auto',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  container: {
    position: 'relative'
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  divider: {
    width: 2,
    height: 28,
    margin: 4
  },
  input: {
    marginLeft: 8,
    flex: 1
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
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});
class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      single: '',
      popper: '',
      leagues: []
    };
    this.renderSearchComponent = this.renderSearchComponent.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.getSearchSuggestions = this.getSearchSuggestions.bind(this);
    this.renderSearchComponent = this.renderSearchComponent.bind(this);
  }

  endpoint = '/search'

  componentDidMount(){
    axios
      .get(this.endpoint)
      .then(response => {
        this.setState({
          leagues:response.data
        })
      })
      .catch(error => console.log(error))
  }

  renderSearchComponent(inputProps) {
    const { classes, inputRef = () => {}, ref, ...other } = inputProps;

    return (
      <>
        <Paper className={classes.roots} elevation={1}>
          <InputBase
            className={classes.input}
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
          <Divider className={classes.divider} />
          <IconButton
            className={classes.iconButton}
            type="submit"
            aria-label="Search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
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
              <span key={String(index)} style={{ fontWeight: 900 }}>
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
      : this.state.leagues.filter(league => {
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
      leagues: this.getSearchSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      leagues: []
    });
  };

  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue
    });
  };

  render() {
    const { classes } = this.props;

    const autosuggestProps = {
      renderSearchComponent: this.renderSearchComponent,
      suggestions: this.state.leagues,
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
            placeholder: 'Search Leagues',
            value: this.state.single,
            onChange: this.handleChange('single')
          }}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          )}
        />
        <div className={classes.divider} />
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            label: 'Label',
            placeholder: 'With Popper',
            value: this.state.popper,
            onChange: this.handleChange('popper'),
            inputRef: node => {
              this.popperNode = node;
            },
            InputLabelProps: {
              shrink: true
            }
          }}
          theme={{
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion
          }}
          renderSuggestionsContainer={options => (
            <Popper anchorEl={this.popperNode} open={Boolean(options.children)}>
              <Paper
                square
                {...options.containerProps}
                style={{
                  width: this.popperNode ? this.popperNode.clientWidth : null
                }}
              >
                {options.children}
              </Paper>
            </Popper>
          )}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
