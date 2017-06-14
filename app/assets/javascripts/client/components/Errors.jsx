const Errors = ({ errors }) => (
  <div className="alert alert-danger alert-dismissible" role="alert">
    <strong>Error!</strong>
    <ul>
      {errors.map(error => <li key={error}>{error}</li>)}
    </ul>
  </div>
);
