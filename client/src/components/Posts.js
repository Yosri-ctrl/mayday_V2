import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Posts.css";
import Header from "./home/Header";

export default function Posts() {
  const [postName, setPostName] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postRate, setPostRate] = useState(0);
  const [postReview, setPostReview] = useState("");

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setPostList(response.data);
    });
  }, []);

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      postName,
      postDescription,
      postRate,
      postReview,
    }).then(() => {
      alert("successful insert");
    });
  };

  return (
    <div>
      <Header />
      <div id="posts">
        {/* <div className="card mx-auto">
          <div className="card-body">
            <h5 className="card-title">Post</h5>
            <form>
              <div className="mb-3">
                <label className="form-label">postName</label>
                <input
                  className="form-control"
                  onChange={(e) => {
                    setPostName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">postDescription</label>
                <input
                  className="form-control"
                  onChange={(e) => {
                    setPostDescription(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">postRate</label>
                <input
                  className="form-control"
                  onChange={(e) => {
                    setPostRate(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">postReview</label>
                <input
                  className="form-control"
                  onChange={(e) => {
                    setPostReview(e.target.value);
                  }}
                />
              </div>
              <button
                onClick={submitReview}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div> */}

        <div className="container bootstrap snippets bootdey">
          <div className="row">
            <div className="col-md-offset-3 col-md-6 col-xs-12 mx-auto">
              <div className="well well-sm well-social-post">
                <form>
                  <div className="list-inline d-flex align-items-center">
                    <h5 className="fw-bold ps-3 me-auto">Create new post</h5>
                    <div className="dropdown text-right">
                      <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Field
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Electrical</a></li>
                        <li><a className="dropdown-item" href="#">Cleaning</a></li>
                        <li><a className="dropdown-item" href="#">Plumbing</a></li>
                        <li><a className="dropdown-item" href="#">Babysitting</a></li>
                      </ul>
                    </div>
                  </div>
                  <textarea className="form-control" placeholder="What's in your mind?"></textarea>
                  <div className='list-inline post-actions links text-center'>
                    <button className="view">Post</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>                                                            

        <div className="row mx-auto pt-5">
          <div className="col-lg-4 col-md-6">
            <div className="card d-flex">
              <div className="img">
                <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
              </div>
              <div className="infos pt-3">
                <div className="name">
                  <h2>John Tribiony</h2>
                  <h4>2 days ago</h4>
                </div>
                <p className="text"><b>Description: </b> I can fix any electrical issue</p>
                <div className="links ms-4">
                  <button className="view ms-5">View profile</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card d-flex">
              <div className="img">
                <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
              </div>
              <div className="infos pt-3">
                <div className="name">
                  <h2>John Tribiony</h2>
                  <h4>2 days ago</h4>
                </div>
                <p className="text"><b>Description: </b> I can fix any electrical issue</p>
                <div className="links ms-4">
                  <button className="view ms-5">View profile</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card d-flex">
              <div className="img">
                <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
              </div>
              <div className="infos pt-3">
                <div className="name">
                  <h2>John Tribiony</h2>
                  <h4>2 days ago</h4>
                </div>
                <p className="text"><b>Description: </b> I can fix any electrical issue</p>
                <div className="links ms-4">
                  <button className="view ms-5">View profile</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card d-flex">
              <div className="img">
                <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
              </div>
              <div className="infos pt-3">
                <div className="name">
                  <h2>John Tribiony</h2>
                  <h4>2 days ago</h4>
                </div>
                <p className="text"><b>Description: </b> I can fix any electrical issue</p>
                <div className="links ms-4">
                  <button className="view ms-5">View profile</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card d-flex">
              <div className="img">
                <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
              </div>
              <div className="infos pt-3">
                <div className="name">
                  <h2>John Tribiony</h2>
                  <h4>2 days ago</h4>
                </div>
                <p className="text"><b>Description: </b> I can fix any electrical issue</p>
                <div className="links ms-4">
                  <button className="view ms-5">View profile</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card d-flex">
              <div className="img">
                <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
              </div>
              <div className="infos pt-3">
                <div className="name">
                  <h2>John Tribiony</h2>
                  <h4>2 days ago</h4>
                </div>
                <p className="text"><b>Description: </b> I can fix any electrical issue</p>
                <div className="links ms-4">
                  <button className="view ms-5">View profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row mx-auto pt-5">
          {postList.map((val) => {
            return (
              <div className="col-lg-4 col-md-6">
                <div className="card d-flex">
                  <div className="img">
                    <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                  </div>
                  <div className="infos pt-3">
                    <div className="name">
                      <h2>{val.postName}</h2>
                      <h4>2 days ago</h4>
                    </div>
                    <p className="text">{val.postDescription}</p>
                    <div className="links ms-4">
                      <button className="view ms-5">View profile</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}
