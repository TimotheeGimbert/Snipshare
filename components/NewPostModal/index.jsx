import { useAtom } from "jotai";
import { showNewPostModalAtom } from "store";
import { blocker, modal } from "./new_post_modal.module.scss";
import NewPostForm from "./NewPostForm";

const NewPostModal = () => {
  const [_, setShowNewPostModal] = useAtom(showNewPostModalAtom);

  return (
    <>
      <div className={blocker} onClick={() => setShowNewPostModal(false)} />
      <div className={modal}>
        Coucou !<br />
        Tu veux voir ma grosse modale ?
        <NewPostForm />
      </div>
    </>
  );
};

export default NewPostModal;
