import React, { Component } from "react";
import SearchInput, { createFilter } from "react-search-input";
import ArticleDisplay from "./ArticleDisplay";

class Search extends Component {
  KEYS_TO_FILTERS = ["title", "body", "created_by"];
  state = {
    searchTerm: "",
    filteredArticles: []
  };

  searchUpdated = term => {
    this.props.changeSearchStatus(term);
    this.setState({ searchTerm: term });
    this.filterArticles();
  };

  filterArticles = () => {
    const filteredArticles = this.props.articles.filter(
      createFilter(this.state.searchTerm, this.KEYS_TO_FILTERS)
    );
    this.setState({
      filteredArticles
    });
  };

  render() {
    return (
      // <label>
      //   <i className="fas fa-search" />
      //   <input type="text" name="Search" id="search" />
      // </label>
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        <ArticleDisplay articles={this.state.filteredArticles} />
      </div>
    );
  }
}

export default Search;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchTerm: ""
//     };
//     this.searchUpdated = this.searchUpdated.bind(this);
//   }

//   render() {
//     const fi = emails.filter(
//       createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
//     );

//     return (
//       <div>
//         <SearchInput className="search-input" onChange={this.searchUpdated} />
//         {filteredEmails.map(email => {
//           return (
//             <div className="mail" key={email.id}>
//               <div className="from">{email.user.name}</div>
//               <div className="subject">{email.subject}</div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }
