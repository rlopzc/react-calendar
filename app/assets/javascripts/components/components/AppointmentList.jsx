const AppointmentsList = ({ appointments }) => (
  <div className="list-group col-md-12 appointments-list">
    <h3>Current appointments:</h3>
    {appointments.map((appointment) => (
      <Appointment key={appointment.id} {...appointment} />
    ))}
  </div>
);

AppointmentsList.propTypes = {
  appointments: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    title: React.PropTypes.string,
    apt_time: React.PropTypes.string,
    description: React.PropTypes.string,
  })).isRequired,
};
