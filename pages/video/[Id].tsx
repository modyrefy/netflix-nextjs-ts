import {NextPage} from "next";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../../styles/Video.module.css";
import clsx from "classnames";
const Video: NextPage = (props) => {
    const router=useRouter();
    const [show, setShow] = useState(false);
    const [toggleLike, setToggleLike] = useState(false);
    const [toggleDisLike, setToggleDisLike] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleToggleDislike = async () => {
        setToggleDisLike(!toggleDisLike);
        setToggleLike(toggleDisLike);
        const val = !toggleDisLike;
        const favourited = val ? 0 : 1;
        //const response = await runRatingService(favourited);
    };
    const handleToggleLike = async () => {
        const val = !toggleLike;
        setToggleLike(val);
        setToggleDisLike(toggleLike);
        const favourited = val ? 1 : 0;
        //const response = await runRatingService(favourited);
    };
    useEffect(()=>{
        setShow(true);
    },[])
    return(<>
        {/*<Button variant="primary"  onClick={handleShow}>*/}
        {/*    Launch demo modal*/}
        {/*</Button>*/}
        <div className={styles.container}>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <iframe
                    id="ytplayer"
                    width="100%"
                    height="360"
                    src={`https://www.youtube.com/embed/${ router.query.Id}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
                ></iframe>
                <div className={styles.likeDislikeBtnWrapper}>
                    <div className={styles.likeBtnWrapper}>
                        <button onClick={handleToggleLike}>
                            <div className={styles.btnWrapper}>
                                {/*<Like selected={toggleLike} />*/}
                            </div>
                        </button>
                    </div>
                    <button onClick={handleToggleDislike}>
                        <div className={styles.btnWrapper}>
                            {/*<DisLike selected={toggleDisLike} />*/}
                        </div>
                    </button>
                </div>
                <div className={styles.modalBody}>
                    <div className={styles.modalBodyContent}>
                        <div className={styles.col1}>
                            <p className={styles.publishTime}>{}</p>
                            <p className={styles.title}>{}</p>
                            <p className={styles.description}></p>
                        </div>
                        <div className={styles.col2}>
                            <p className={clsx(styles.subText, styles.subTextWrapper)}>
                                <span className={styles.textColor}>Cast: </span>
                                <span className={styles.channelTitle}>{}</span>
                            </p>
                            <p className={clsx(styles.subText, styles.subTextWrapper)}>
                                <span className={styles.textColor}>View Count: </span>
                                <span className={styles.channelTitle}>{}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary"  onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary"  onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>

        </Modal>
        </div>
    </>)
}
// Video.getLayout= function getLayout(page:ReactElement) {
//     return(
//         <GuestLayout>
//             {page}
//         </GuestLayout>
//     )
// }
export default Video;