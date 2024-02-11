import {
  Button,
  Fade,
  ImageList,
  ImageListItem,
  Input,
  Modal,
  OutlinedInput,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { AuctionFull, AuctionModalType } from "../../@types/types";
import { createLot, updateLot } from "../../redux/slices/lots/requests";
import { UseAppDispatch } from "../../redux/store";
import styles from "./AuctionItemModal.module.scss";

interface AuctionItemModalProps {
  type: AuctionModalType;
  initialData?: AuctionFull;
}

const AuctionItemModal: React.FC<AuctionItemModalProps> = ({
  type,
  initialData,
}) => {
  const { id } = useParams();
  const [title, setTitle] = useState(initialData?.name ?? "");
  const [description, setDescription] = useState(
    initialData?.description ?? ""
  );
  const [imagesPreview, setImagesPreview] = useState<string[]>(
    initialData?.photos ?? []
  );
  const [startPrice, setStartPrice] = useState<number>();
  const [open, setOpen] = useState(false);
  const appDispatch = UseAppDispatch();

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
          const newImages = [...imagesPreview, reader.result.toString()];

          setImagesPreview(newImages);
        }
      };
    }
  };

  const onSubmit = () => {
    appDispatch(
      createLot({
        id: Number(id!),
        photos: imagesPreview,
        name: title,
        description,
        startPrice: startPrice!,
      })
    );

    closeModal();
    onClean();
  };

  const onClean = () => {
    setTitle("");
    setDescription("");
    setImagesPreview([]);
  };

  const onEdit = () => {
    appDispatch(
      updateLot({
        id: Number(id!),
        photos: imagesPreview,
        name: title,
        description,
      })
    );
    closeModal();
    onClean();
  };

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
          <div className={styles["modal-image-block"]}>
            {imagesPreview.length ? (
              <ImageList
                sx={{ width: 300, height: 100 }}
                cols={3}
                rowHeight={100}
              >
                {imagesPreview.map((item) => (
                  <ImageListItem key={item}>
                    <img
                      src={item}
                      alt={item}
                      loading="lazy"
                      className={styles["gallery-image"]}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            ) : (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxddtPSxt3mS3QjGibU-bVEPkoBgh_852nNRuU2_CuZ2sEEJJD9VEcGBZ9OGmlv_LmGdg&usqp=CAU"
                alt="Попередній перегляд"
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />
            )}
            <div className={styles["modal-input-image"]}>
              <Input
                inputProps={{
                  accept: "image/*",
                }}
                type="file"
                onChange={handleImageChange}
              />
            </div>
          </div>

          <div className={styles["modal-actions"]}>
            <Button onClick={onClean}>reset</Button>
            {type === AuctionModalType.Create ? (
              <Button onClick={onSubmit}>submit</Button>
            ) : (
              <Button onClick={onEdit}>edit</Button>
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
