import React from "react";

const Header = ({ changeView, refreshToken, handleLogOut }) => {
  const setViewToAddPost = () => {
    changeView("AddPost");
  };

  const setViewToPostsList = () => {
    changeView("PostsList");
  };

  const setViewToUserPosts = () => {
    changeView("UserPosts");
  };

  const setViewToAbout = () => {
    changeView("About");
  };

  const setViewToSettings = () => {
    changeView("Settings");
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
          ></a>

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

            {refreshToken && (
              <li>
                <a
                  href="#"
                  className="nav-link px-2 link-body-emphasis"
                  onClick={setViewToUserPosts}
                >
                  Your Posts
                </a>
              </li>
            )}
            {refreshToken && (
              <li>
                <a
                  href="#"
                  className="nav-link px-2 link-body-emphasis"
                  onClick={setViewToAddPost}
                >
                  Add Your Post
                </a>
              </li>
            )}
            {refreshToken && (
              <li>
                <a
                  href="#"
                  className="nav-link px-2 link-body-emphasis"
                  onClick={setViewToAbout}
                >
                  About
                </a>
              </li>
            )}
          </ul>

          {refreshToken && (
            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
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
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={setViewToAbout}
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => {
                      handleLogOut();
                    }}
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
