
import { useState, useRef } from 'react';
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
type tab = {
  type: string,
  text: string;
};
// Comment List data
const defaultList = [
  {
    // comment id
    rpid: 3,
    // user info
    user: {
      uid: '13258165',
      avatar: '',
      uname: 'Jay Zhou',
    },
    // comment content
    content: 'Nice, well done',
    // created datetime
    ctime: '10-18 08:15',
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: '',
      uname: 'Song Xu',
    },
    content: 'I search for you thousands of times, from dawn till dusk.',
    ctime: '11-13 11:29',
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar,
      uname: 'John',
    },
    content: 'I told my computer I needed a break... now it will not stop sending me vacation ads.',
    ctime: '10-19 09:00',
    like: 66,
  },
];
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


type ItemProps = {
  item: Comment,
  onDeleteComment: (rpid: number | string) => void;
};


function Item(props: ItemProps) {

  const { item, onDeleteComment } = props;

  return (
    <div className="reply-item" key={item.rpid}>
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
          <div className="user-name">{item.user.uname}</div>
        </div>
        {/* comment content */}
        <div className="root-reply">
          <span className="reply-content">{item.content}</span>
          <div className="reply-info">
            {/* comment created time */}
            <span className="reply-time">{item.ctime}</span>
            {/* total likes */}
            <span className="reply-time">Like:{item.like}</span>

            {
              item.user.uid === user.uid && (
                <span className="delete-btn" onClick={() => onDeleteComment(item.rpid)}>
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

  const [commentList, setCommentList] = useState<Comment[]>(_.orderBy(defaultList, "like", "desc"));
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
    setCommentList(commentList.filter(item => item.rpid !== rpid));
  };
  const makePost = () => {
    // console.log(textareaRef.current?.value);
    // do another version: controlled component
    const newComment = {
      rpid: uuidv4(),
      user,
      content: "my comment", // controlled component
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
          {commentList.map(item => <Item item={item} onDeleteComment={handleDeleteComment} />)}


        </div>
      </div>
    </div>
  );
};

export default App;