const Appointment = ({ title, apt_time, description }) => (
  <a href="#" className="list-group-item">
    <h4 className="list-group-item-heading">
      {title} <small>{formatDate(apt_time)}</small>
    </h4>

    {description &&
     <p className="list-group-item-text">
       {description}
     </p>
    }
  </a>
);

Appointment.propTypes = {
  title: React.PropTypes.string.isRequired,
  apt_time: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
};
