import React, { Component } from 'react';
import { TiUserDelete } from "react-icons/ti";
import Moment from 'react-moment';

class ListAppointments extends Component {
  render() {
    return (
      <div className="appointment-list item-list mb-3">
        {this.props.appointments.map(item => (
          <div className="pet-item col media py-3" key={item.aptId}>
            <div className="mr-3">
              <button
                className="pet-delete btn btn-sm btn-danger"
                onClick={() => this.props.deleteAppointment(item)}
              >
                <TiUserDelete />
              </button>
            </div>

            <div className="pet-info media-body">
              <div className="pet-head d-flex">
                <span
                  className="pet-name"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={e =>
                    this.props.updateInfo(
                      'kidName',
                      e.target.innerText,
                      item.aptId
                    )
                  }
                >
                  {item.aptId}--{item.kidName}
                </span>
                <span className="apt-date ml-auto">
                  <Moment
                    date={item.aptDate}
                    parse="YYYY-MM-dd hh:mm"
                    format="MMM-d h:mma"
                  />
                </span>
              </div>

              <div className="owner-name">
                <span className="label-item">Parent: </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={e =>
                    this.props.updateInfo(
                      'parentName',
                      e.target.innerText,
                      item.aptId
                    )
                  }
                >
                  {item.parentName}
                </span>
              </div>
              <div
                className="apt-notes"
                contentEditable
                suppressContentEditableWarning
                onBlur={e =>
                  this.props.updateInfo(
                    'aptNotes',
                    e.target.innerText,
                    item.aptId
                  )
                }
              >
                {item.aptNotes}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListAppointments;
