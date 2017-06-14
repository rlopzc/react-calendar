class AppointmentsForm extends React.Component {
  handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    this.props.onUserInput({
      [`${name}`]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit();
  }

  setAptTime = (event) => {
    this.props.onUserInput({
      apt_time: event.toDate(),
    });
  }

  render() {
    const {
      title,
      apt_time,
      description,
    } = this.props;
    const inputProps = { name: 'apt_time' };
    const dateTimeProps = {
      inputProps,
      open: true,
      input: false,
      onChange: this.setAptTime,
      className: 'col-md-offset-3'
    };

    return (
      <div className="row">
        <h2>Make a new appointment</h2>
        <hr/>
        <form onSubmit={this.handleSubmit}>
          <div className="col-md-6">

            <div className="form-group">
              <input className="form-control" name="title" placeholder="Appointment title"
                value={title} onChange={this.handleChange} />
            </div>

            <div className="form-group">
              <textarea className="form-control" name="description"
                placeholder="Description" rows="5" value={description} onChange={this.handleChange}></textarea>
            </div>
          </div>

          <div className="col-md-6">
            <Datetime {...dateTimeProps} />
          </div>
          <div className="col-md-12 text-center">
            <input type="submit" value="Make appointment" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
