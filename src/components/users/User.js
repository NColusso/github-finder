import { Component } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  };

  render() {
    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <div>
        <Link to="/" className="btn btn-light">
          Back to Search{" "}
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt="Avatar"
              className="round-img"
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <>
                <h3>Bio</h3> <p>{bio}</p>
              </>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul>
              {login && (
                <li>
                  <strong>Username:</strong> {login}
                </li>
              )}
              {company && (
                <li>
                  <strong>Company:</strong> {company}
                </li>
              )}
              {blog && (
                <li>
                  <strong>Website:</strong> {blog}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
      </div>
    );
  }
}

export default User;