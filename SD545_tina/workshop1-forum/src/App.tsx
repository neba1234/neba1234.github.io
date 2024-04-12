
import { useState, useRef, useEffect } from 'react';
import './App.scss';
import avatar from './images/bozai.png';
import _ from 'lodash';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';


type Comment = {
  rpid: number | string,
  user: {
    uid: string,
    avatar: string,
    uname: string;
  };
  content: string,
  ctime: string,
  like: number;
};

type ItemProps = {
  rpid: number | string,
  user: {
    uid: string,
    avatar: string,
    uname: string;
  },
  content: string,
  ctime: string,
  like: number,
  onDeleteComment: (rpid: number | string) => void;
};


type tab = {
  type: string,
  text: string;
};

// current logged in user info
const user = {
  // userid
  uid: '30009257',
  // profile
  avatar,
  // username
  uname: 'Mekdi',
};



// Nav Tab
const tabs = [
  { type: 'hot', text: 'Top' },
  { type: 'newest', text: 'Newest' },
];

function useGetList() {
  const [commentList, setCommentList] = useState<Comment[]>([]);
  useEffect(() => {
    async function getDefaultList() {
      const response = await fetch('http://localhost:3004/list');
      const data = await response.json();
      setCommentList(_.orderBy(data, 'like', 'desc'));
    }
    getDefaultList();
  }, []);

  return {
    commentList,
    setCommentList
  };
}


function Item(props: ItemProps) {

  const { rpid, user: myuser, content, ctime, like, onDeleteComment } = props;

  return (
    <div className="reply-item" key={rpid}>
      {/* profile */}
      <div className="root-reply-avatar">
        <div className="bili-avatar">
          <img
            className="bili-avatar-img"
            alt=""
          />
        </div>
      </div>

      <div className="content-wrap">
        {/* username */}
        <div className="user-info">
          <div className="user-name">{user.uname}</div>
        </div>
        {/* comment content */}
        <div className="root-reply">
          <span className="reply-content">{content}</span>
          <div className="reply-info">
            {/* comment created time */}
            <span className="reply-time">{ctime}</span>
            {/* total likes */}
            <span className="reply-time">Like:{like}</span>

            {
              myuser.uid === user.uid && (
                <span className="delete-btn" onClick={() => onDeleteComment(rpid)}>
                  Delete
                </span>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}


const App = () => {

  const { commentList, setCommentList } = useGetList();
  const [activeType, setActiveType] = useState("hot");
  const [comment, setComment] = useState<string>('');

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleActiveType = (type: string) => {
    setActiveType(type);
    if (type === "hot") {
      setCommentList(_.orderBy(commentList, 'like', 'desc'));
    } else {
      setCommentList(_.orderBy(commentList, 'ctime', 'desc'));
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleDeleteComment = (rpid: string | number) => {
    setCommentList(commentList.filter((item: { rpid: string | number; }) => item.rpid !== rpid));
  };
  const makePost = () => {

    const newComment = {
      rpid: uuidv4(),
      user,
      content: "my comment",
      ctime: dayjs(Date.now()).format('MM-DD HH:mm'),
      like: 0
    };

    setCommentList([...commentList, newComment]);
    setComment("");
    textareaRef.current?.focus();
  };
  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            {/* Like */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}
            {tabs.map(tab => (
              <span className={classNames('nav-item', { active: tab.type === activeType })}
                key={tab.type}
                onClick={() => handleActiveType(tab.type)}>{tab.text}</span>
            ))}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* comments */}
        <div className="box-normal">
          {/* current logged in user profile */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="Profile" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* comment */}
            <textarea value={comment} onChange={handleChange}
              className="reply-box-textarea"
              placeholder="tell something..."
            />
            {/* post button */}
            <div className="reply-box-send" onClick={makePost}>
              <div className="send-text">post</div>
            </div>
          </div>
        </div>
        {/* comment list */}
        <div className="reply-list">
          {/* comment item */}
          {commentList.map((item: Comment) => <Item {...item} onDeleteComment={handleDeleteComment} />)}


        </div>
      </div>
    </div>
  );
};

export default App;
