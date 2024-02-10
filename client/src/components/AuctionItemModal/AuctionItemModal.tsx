import {
  Button,
  Fade,
  Input,
  Modal,
  OutlinedInput,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { AuctionModalType } from "../../@types/types";
import styles from "./AuctionItemModal.module.scss";

interface AuctionItemModalProps {
  type: AuctionModalType;
  initialData?: {
    title: string;
    description: string;
    imagePreview: string;
  };
}

const AuctionItemModal: React.FC<AuctionItemModalProps> = ({
  type,
  initialData,
}) => {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [description, setDescription] = useState(
    initialData?.description ?? ""
  );
  const [imagePreview, setImagePreview] = useState<string>(
    initialData?.imagePreview ?? ""
  );
  const [startPrice, setStartPrice] = useState<number>();

  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = function () {
        if (reader.result !== null) {
          setImagePreview(reader.result.toString());
        }
      };
    }
  };

  const onSubmit = () => {};

  const onClean = () => {
    setTitle("");
    setDescription("");
    setImagePreview("");
  };

  const onDelete = () => {};

  const onEdit = () => {};

  return (
    <>
      <Button onClick={openModal}>
        {type === AuctionModalType.Create ? "Create lot" : "Edit lot"}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={closeModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
      >
        <div className={styles["modal-content"]}>
          <h2>
            {type === AuctionModalType.Create ? "Create modal" : "Edit modal"}
          </h2>
          <TextField
            type="text"
            label="title"
            variant="outlined"
            className={styles["modal-title-field"]}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>Description</p>
          <TextareaAutosize
            placeholder="Description"
            minRows={3}
            maxRows={5}
            className={styles["modal-description-field"]}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {type === AuctionModalType.Create && (
            <>
              <p>Start price:</p>
              <OutlinedInput
                className={styles["modal-start-price"]}
                type="number"
                value={startPrice}
                onChange={(e) => setStartPrice(Number(e.target.value))}
              />
            </>
          )}

          <h2>Попередній перегляд зображення:</h2>
          <div className={styles["modal-image-block"]}>
            <div className={styles["modal-image"]}>
              <img
                src={
                  imagePreview
                    ? imagePreview
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxddtPSxt3mS3QjGibU-bVEPkoBgh_852nNRuU2_CuZ2sEEJJD9VEcGBZ9OGmlv_LmGdg&usqp=CAU"
                }
                alt="Попередній перегляд"
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />
            </div>

            <Input
              type="file"
              onChange={handleImageChange}
              className={styles["modal-input-image"]}
            />
          </div>

          <div className={styles["modal-actions"]}>
            {type === AuctionModalType.Create ? (
              <>
                <Button onClick={onClean}>reset</Button>
                <Button onClick={onSubmit}>submit</Button>
              </>
            ) : (
              <>
                <Button onClick={onDelete}>delete</Button>
                <Button onClick={onEdit}>edit</Button>
              </>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

const Backdrop = React.forwardRef<HTMLDivElement, { open?: boolean }>(
  (props, ref) => {
    const { open, ...other } = props;
    return (
      <Fade in={open}>
        <div ref={ref} {...other} className={styles["backdrop"]} />
      </Fade>
    );
  }
);

export default AuctionItemModal;
