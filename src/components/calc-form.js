import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"

class CalcForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vatRate: 21,
      incVat: NaN,
      exVat: NaN
    }
  }

  handleRadioChange = event => {
    const vat = parseFloat(event.target.value, 10)
    this.setState({
      vatRate: vat,
      incVat: exVatToIncVat(vat, this.state.exVat)
    })
  }

  handleIncVatChange = event => {
    const inc = parseFloat(event.target.value, 10)
    this.setState({
      incVat: inc,
      exVat: incVatToExtVat(this.state.vatRate, inc)
    })
  }

  handleExVatChange = event => {
    const ex = parseFloat(event.target.value, 10)
    this.setState({
      exVat: ex,
      incVat: exVatToIncVat(this.state.vatRate, ex)
    })
    console.log(this.state.exVat)
  }

  render() {
    return (
      <div className="container">
        <h1>PVM Skaiciuokle</h1>
        <form>
          <div className="radio-buttons">
            <div className="radio-row">
              <label>21%</label>
              <input
                type="radio"
                value="21"
                checked={this.state.vatRate === 21}
                onChange={this.handleRadioChange}
              />
            </div>

            <div className="radio-row">
              <label>9%</label>
              <input
                type="radio"
                value="9"
                checked={this.state.vatRate === 9}
                onChange={this.handleRadioChange}
              />
            </div>

            <div className="radio-row">
              <label>5%</label>
              <input
                type="radio"
                value="5"
                checked={this.state.vatRate === 5}
                onChange={this.handleRadioChange}
              />
            </div>
          </div>

          <div className="input-row">
              <label>Suma (be PVM)</label>
              <input
                type="Number"
                onChange={this.handleExVatChange}
                value={this.state.exVat}
              />
            </div>

            <div className="input-row">
              <label>PVM suma</label>
              <input
                type="Number"
                value={this.state.incVat - this.state.exVat}
              />
            </div>

            <div className="input-fields">
            <div className="input-row">
              <label>Bendra suma (Su PVM)</label>
              <input
                type="Number"
                onChange={this.handleIncVatChange}
                value={this.state.incVat}
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default CalcForm
