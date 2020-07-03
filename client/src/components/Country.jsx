import React from "react";

class Country extends React.Component {
  render() {
    let countries = this.props.options;
    let optionItems = countries.map((country) => (
      <option key={country.id} value={country.id}>
        {country.name}
      </option>
    ));
    const country = countries.find(
      (country) => country.code === this.props.countryCode
    );

    return (
      <div className="form-group">
        <label htmlFor={this.props.name}> {this.props.title} </label>
        <select
          id={this.props.name}
          name={this.props.name}
          value={country?.id}
          onChange={this.props.handleChange}
          className="form-control"
        >
          <option value="" disabled>
            {this.props.placeholder}
          </option>
          {optionItems}
        </select>
      </div>
    );
  }
}

export default Country;
