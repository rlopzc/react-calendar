class Appointments extends React.Component {
  static defaultProps = {
  }

  static propTypes = {
    appointments: React.PropTypes.array.isRequired,
  }

  state = {
    appointments: this.props.appointments,
    title: '',
    apt_time: '',
    description: '',
  }

  handleUserInput = (obj) => {
    this.setState(obj);
  }

  handleFormSubmit = () => {
    const appointment = {
      title: this.state.title,
      apt_time: this.state.apt_time,
      description: this.state.description,
    };

    $.post('/appointments', {appointment})
     .done(data => {
       this.addNewAppointment(data);
     })
     .fail(response => {
       if (response.status === 422) {
         this.setState({errors: response.responseJSON});
       }
     });
  }

  addNewAppointment = (newAppointment) => {
    const appointments = [...this.state.appointments, newAppointment];
    appointments.sort((a, b) => (
      new Date(a.apt_time) - new Date(b.apt_time)
    ));

    this.setState({
      appointments,
      title: '',
      apt_time: '',
      description: '',
      errors: '',
    });
  }

  render() {
    const {
      appointments,
      title,
      apt_time,
      description,
      errors,
    } = this.state;

    return (
      <div>
        <Navbar />
        <div className="container">
          {errors && <Errors errors={errors} />}
          <AppointmentsForm
            title={title}
            apt_time={apt_time}
            description={description}
            onUserInput={this.handleUserInput}
            onFormSubmit={this.handleFormSubmit} />
          <AppointmentsList
            appointments={appointments} />
        </div>
      </div>
    );
  }
};
