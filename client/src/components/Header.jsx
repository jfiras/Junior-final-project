import React from "react";

const Header = (props) => {
  const setViewToAddPost = () => {
    props.changeView("AddPost");
  };

  const setViewToPostsList = () => {
    props.changeView("PostsList");
  };

  const setViewToAbout = () => {
    props.changeView("About");
  };

  const setViewToSettings = () => {
    props.changeView("Settings");
  };

  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a className="navbar-brand" href="#" onClick={setViewToPostsList}>
            <img
              src="https://static-00.iconduck.com/assets.00/todo-icon-1024x1024-7nszgsj6.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />
          </a>

          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
          >
            {/* <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlink:href="#bootstrap"></use>
            </svg> */}
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a
                href="#"
                className="nav-link px-2 link-secondary"
                onClick={setViewToPostsList}
              >
                FoundIt App
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link px-2 link-body-emphasis"
                onClick={setViewToPostsList}
              >
                Your Posts
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link px-2 link-body-emphasis"
                onClick={setViewToAddPost}
              >
                Add Your Post
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link px-2 link-body-emphasis"
                onClick={setViewToAbout}
              >
                About
              </a>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="dropdown text-end">
            <a
              href="#"
              className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="data:image/jpeg;base64,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"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </a>
            <ul className="dropdown-menu text-small">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={setViewToAddPost}
                >
                  New Post...
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={setViewToSettings}
                >
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={setViewToAbout}>
                  Contact Us
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
