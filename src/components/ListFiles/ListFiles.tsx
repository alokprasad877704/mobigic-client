import React from "react";
import { ListItem } from "../Common/ListItem/ListItem";
import "../styles/list-files.css";

import { Loading } from "../Common/Loading/Loading";
import { getColor } from "../../helpers/randomColor";
import deleteIcon from "../../assets/icons/delete.svg";
import downLoadIcon from "../../assets/icons/download.svg";

interface Props {
  fileDetails: any;
  allFilesError: any;
  showLoader: boolean;
  onDeleteIconClick: (fileId: number) => void;
  onDownLoadClick: (fileId: number) => void;
}

export const ListFiles: React.FC<Props> = ({
  fileDetails,
  allFilesError,
  showLoader,
  onDeleteIconClick,
  onDownLoadClick,
}) => {
  return showLoader ? (
    <Loading />
  ) : fileDetails.length > 0 ? (
    <div id="list-file-main-container">
      <div className="list-file-container">
        {/* Mapping All the file  */}
        {fileDetails.map((item: any, index: number) => (
          // List Item for mapping file details
          <ListItem
            titleText={item.file_name}
            handleClick={() => console.log(item)}
            id={"file-details" + index}
            key={item.file_name + index}
            backgroundColor={getColor(index)}
          >
            {/* Child Container For Desktop*/}
            <div className="list-file-right-container">
              {/* file ID */}
              <div>
                <p className="file-info">{item.id}</p>
                <p className="file-desc">File Id</p>
              </div>

              {/* SMS Template for file */}
              <div className="file-onboard-date">
                <p className="file-info">
                  {new Date(item.uploaded_at).toLocaleDateString()}
                </p>
                <p className="file-desc">Date</p>
              </div>

              <div>
                <div className="icon-container">
                  <img
                    src={deleteIcon}
                    onClick={() => onDeleteIconClick(item.id)}
                    alt=""
                  />
                </div>
              </div>

              <div>
                <div className="icon-container">
                  <img
                    src={downLoadIcon}
                    onClick={() => onDownLoadClick(item.id)}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </ListItem>
        ))}
      </div>
    </div>
  ) : (
    // If there is any error the show the error Message
    <div className="no-file-container">
      <p className="no-file-message">
        {allFilesError ? allFilesError : "No Files Found"}
      </p>
    </div>
  );
};
