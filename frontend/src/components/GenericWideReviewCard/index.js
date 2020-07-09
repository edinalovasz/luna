import React, {useState, useEffect} from "react";
import defaultProfilePic from "../../assets/images/default-profile-pic.jpg";
import TextareaAutosize from 'react-autosize-textarea';
import DayJS from "react-dayjs";
import styled from "styled-components";
import {rem} from "polished";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import GenericReviewComment from "../GenericReviewComment";

import {
    WideReviewCard,
    WideUserCardProfile,
    StarContainer,
    WideReviewCardText,
    PostComment,
    StarRatingWrapper,
} from "../../style/GlobalWrappers";

import {CommentInput} from "../../style/GlobalInputs";
import {
    SmallButton,
    LikeButton,
    CommentButton,
    SplitButton,
} from "../../style/GlobalButtons";
import StarRatingFix from "../StarRatingFix";
import {createCommentAction, getReviewCommentsAction} from "../../store/actions/commentActions";
import {connect, useDispatch} from "react-redux";
import Spinner from "../GenericSpinner";
import {Link} from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  color: #e47d31;
`;

const Input = styled(TextareaAutosize)`
  width: ${rem("414px")};
  height: ${rem("30px")};
  font-size: ${rem("14px")};
  padding: 1rem;
  border-radius: 30px;
  display: flex;
  resize: none;
  margin-top: 1rem;
  max-height: 300px;
  align-items: center;
`

const GenericWideReviewCard = (props) => {
    const dispatch = useDispatch();
    const {
        review: {
            id: reviewID,
            content,
            restaurant: {name},
            author: {first_name, last_name, amount_of_reviews, avatar, id},
            created,
            rating,
            amount_of_comments,
            amount_of_likes,
        },
    } = props;

    const [commentsData, setComments] = useState({
        showComments: false,
        commentsList: null,
        content: ``,
    });
    console.log("commentsData", commentsData);

    const submitComment = async (e) => {
        e.preventDefault();
        console.log("in the submit!")
        const response = await dispatch(createCommentAction(reviewID, {content: commentsData.content}))
        setComments({...commentsData, commentsList: [response.data, ...commentsData.commentsList], content: ``})

    }

    const handleNewComment = e => {
        const value = e.currentTarget.value;
        setComments({...commentsData, content: value});
    }

    const handleRenderComments = async (e) => {
        if (commentsData.showComments === false) {
            const response = await dispatch(getReviewCommentsAction(reviewID));
            setComments({
                ...commentsData,
                commentsList: response.data,
                showComments: !commentsData.showComments,
            });
        } else {
            setComments({
                showComments: false,
                commentsList: null,
                content: ``,
            });
        }
    };

    return (
        <>
            <WideReviewCard>
                <WideUserCardProfile>
                    <div>
                        <Link to={`/users/${id}`}>
                            <img src={avatar ? avatar : defaultProfilePic}></img>
                        </Link>
                        <div>
                            <StyledLink to={`/users/${id}`}>
                                {first_name + " " + last_name}
                            </StyledLink>
                            <p>{amount_of_reviews} Reviews in Total</p>
                        </div>
                        <StarRatingWrapper>
                            <StarRatingFix avg_rating={rating}/>
                        </StarRatingWrapper>
                    </div>
                    <div>
                        <p>
                            <DayJS format="MM.DD.YYYY HH:mm">{created}</DayJS>
                        </p>
                    </div>
                </WideUserCardProfile>
                {commentsData.showComments ? (
                    <Comments
                        submitComment={submitComment}
                        handleNewComment={handleNewComment}
                        handleRenderComments={handleRenderComments}
                        commentsList={commentsData.commentsList}
                        newCommentData={commentsData.content}
                        content={content}
                    />
                ) : (
                    <LikeCommentView
                        handleRenderComments={handleRenderComments}
                        commentsList={commentsData.commentsList}
                        content={content}
                        amount_of_comments={amount_of_comments}
                        amount_of_likes={amount_of_likes}
                    />
                )}
            </WideReviewCard>
        </>
    );
};
const Comments = ({handleRenderComments, newCommentData, submitComment, commentsList, handleNewComment, content}) => {
    console.log("commentsList   ", commentsList);
    return (
        <>
            <WideReviewCardText>
                <p>{content}</p>
                <PostComment>
                    <Input onChange={handleNewComment} type="text" placeholder="Comment Input Field" onResize={(e) => {
                    }} value={newCommentData}/>
                    <SmallButton onClick={submitComment} >Post</SmallButton>
                    <a onClick={handleRenderComments}>Hide</a>
                </PostComment>
            </WideReviewCardText>
            {commentsList ? (
                commentsList.map((comment, index) => {
                    return <GenericReviewComment key={index} comment={comment}/>;
                })
            ) : (
                <Spinner/>
            )}
        </>
    );
};

const LikeCommentView = ({  commentsList,
                             handleRenderComments,
                             content,
                             amount_of_comments,
                             amount_of_likes,
                         }) => {
    return (
        <WideReviewCardText>
            <p>{content}</p>

            <div>
                <SplitButton>
                    <LikeButton>
                        <FontAwesomeIcon icon={["fa", "thumbs-up"]}/>
                        Like {amount_of_likes}
                    </LikeButton>
                    <CommentButton onClick={handleRenderComments}>
                        Comment {amount_of_comments}
                    </CommentButton>
                </SplitButton>
                <a onClick={handleRenderComments}>View all comments</a>
            </div>
        </WideReviewCardText>
    );
};


export default GenericWideReviewCard;
