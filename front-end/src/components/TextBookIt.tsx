import { motion } from "framer-motion";
import barber_image from "../assets/barber.avif";
import nails_image from "../assets/nails.avif";
import { useEffect, useState } from "react";
import { AutocompleteInput } from "./AutocompleteInput";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const images = [barber_image, nails_image];

export const TextBookIt = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const service = useSelector((state: RootState) => state.inputValue.value);
  const navigate = useNavigate();

  function onButtonClick() {
    navigate(service ? `/search/${service}` : "/search/all");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="py-60 relative flex justify-center ">
      {images.map((img_path, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${img_path})`,
            zIndex: index === currentImageIndex ? 1 : 0,
            backgroundPosition: "40% 20%",
            backgroundSize: "cover",
            filter: "grayscale(0.5)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImageIndex ? 0.35 : 0 }}
          transition={{ ease: "easeInOut" }}
        />
      ))}
      <div className="relative z-10 flex flex-col items-center gap-4 justify-center">
        <div className="flex items-end gap-1">
          {/* B */}
          <motion.svg
            width="52"
            height="69"
            viewBox="0 0 52 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M51.8393 51.432C51.8393 54.824 50.9753 57.864 49.2473 60.552C47.5193 63.176 45.1833 65.256 42.2393 66.792C39.3593 68.264 36.1913 69 32.7353 69H0.57525V0.839996H33.4073C36.6073 0.839996 39.3593 1.704 41.6633 3.432C44.0313 5.096 45.8233 7.272 47.0393 9.96C48.3193 12.584 48.9593 15.336 48.9593 18.216C48.9593 21.608 48.0953 24.744 46.3673 27.624C44.6393 30.504 42.2393 32.648 39.1673 34.056C43.0713 35.208 46.1433 37.352 48.3833 40.488C50.6873 43.624 51.8393 47.272 51.8393 51.432ZM45.1193 50.28C45.1193 47.976 44.6073 45.864 43.5833 43.944C42.5593 41.96 41.1513 40.36 39.3593 39.144C37.6313 37.928 35.6473 37.32 33.4073 37.32H7.29525V63.144H32.7353C35.0393 63.144 37.1193 62.536 38.9753 61.32C40.8313 60.104 42.3033 58.536 43.3913 56.616C44.5433 54.632 45.1193 52.52 45.1193 50.28ZM7.29525 6.696V31.848H30.7193C32.9593 31.848 34.9433 31.272 36.6713 30.12C38.3993 28.904 39.7753 27.336 40.7993 25.416C41.8233 23.496 42.3353 21.448 42.3353 19.272C42.3353 16.968 41.8553 14.888 40.8953 13.032C39.9353 11.112 38.6233 9.576 36.9593 8.424C35.2953 7.272 33.4073 6.696 31.2953 6.696H7.29525Z"
              fill="black"
              stroke="black"
              strokeWidth="0.5"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 1 }}
              transition={{
                pathLength: { duration: 2 },
                fillOpacity: { duration: 3 },
              }}
            />
          </motion.svg>
          <motion.svg
            width="50"
            height="52"
            viewBox="0 0 50 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M24.9651 51.96C21.3811 51.96 18.0531 51.288 14.9811 49.944C11.9731 48.536 9.34913 46.648 7.10913 44.28C4.93313 41.848 3.23713 39.096 2.02113 36.024C0.805125 32.888 0.197125 29.592 0.197125 26.136C0.197125 22.552 0.805125 19.224 2.02113 16.152C3.23713 13.016 4.96513 10.264 7.20513 7.896C9.44513 5.464 12.0691 3.576 15.0771 2.232C18.1491 0.823997 21.4771 0.119997 25.0611 0.119997C28.6451 0.119997 31.9411 0.823997 34.9491 2.232C37.9571 3.576 40.5811 5.464 42.8211 7.896C45.0611 10.264 46.7891 13.016 48.0051 16.152C49.2211 19.224 49.8291 22.552 49.8291 26.136C49.8291 29.592 49.2211 32.888 48.0051 36.024C46.7891 39.096 45.0611 41.848 42.8211 44.28C40.6451 46.648 38.0211 48.536 34.9491 49.944C31.9411 51.288 28.6131 51.96 24.9651 51.96ZM6.82113 26.232C6.82113 29.944 7.62113 33.336 9.22113 36.408C10.8851 39.416 13.0931 41.816 15.8451 43.608C18.5971 45.336 21.6371 46.2 24.9651 46.2C28.2931 46.2 31.3331 45.304 34.0851 43.512C36.8371 41.72 39.0451 39.288 40.7091 36.216C42.3731 33.08 43.2051 29.688 43.2051 26.04C43.2051 22.328 42.3731 18.936 40.7091 15.864C39.0451 12.792 36.8371 10.36 34.0851 8.568C31.3331 6.776 28.2931 5.88 24.9651 5.88C21.6371 5.88 18.5971 6.808 15.8451 8.664C13.1571 10.52 10.9811 12.984 9.31713 16.056C7.65313 19.064 6.82113 22.456 6.82113 26.232Z"
              fill="black"
              stroke="black"
              strokeWidth="0.5"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 1 }}
              transition={{
                pathLength: { duration: 2, delay: 0.2 },
                fillOpacity: { duration: 3, delay: 0.2 },
              }}
            />
          </motion.svg>
          <motion.svg
            width="50"
            height="52"
            viewBox="0 0 50 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M24.9651 51.96C21.3811 51.96 18.0531 51.288 14.9811 49.944C11.9731 48.536 9.34913 46.648 7.10913 44.28C4.93313 41.848 3.23713 39.096 2.02113 36.024C0.805125 32.888 0.197125 29.592 0.197125 26.136C0.197125 22.552 0.805125 19.224 2.02113 16.152C3.23713 13.016 4.96513 10.264 7.20513 7.896C9.44513 5.464 12.0691 3.576 15.0771 2.232C18.1491 0.823997 21.4771 0.119997 25.0611 0.119997C28.6451 0.119997 31.9411 0.823997 34.9491 2.232C37.9571 3.576 40.5811 5.464 42.8211 7.896C45.0611 10.264 46.7891 13.016 48.0051 16.152C49.2211 19.224 49.8291 22.552 49.8291 26.136C49.8291 29.592 49.2211 32.888 48.0051 36.024C46.7891 39.096 45.0611 41.848 42.8211 44.28C40.6451 46.648 38.0211 48.536 34.9491 49.944C31.9411 51.288 28.6131 51.96 24.9651 51.96ZM6.82113 26.232C6.82113 29.944 7.62113 33.336 9.22113 36.408C10.8851 39.416 13.0931 41.816 15.8451 43.608C18.5971 45.336 21.6371 46.2 24.9651 46.2C28.2931 46.2 31.3331 45.304 34.0851 43.512C36.8371 41.72 39.0451 39.288 40.7091 36.216C42.3731 33.08 43.2051 29.688 43.2051 26.04C43.2051 22.328 42.3731 18.936 40.7091 15.864C39.0451 12.792 36.8371 10.36 34.0851 8.568C31.3331 6.776 28.2931 5.88 24.9651 5.88C21.6371 5.88 18.5971 6.808 15.8451 8.664C13.1571 10.52 10.9811 12.984 9.31713 16.056C7.65313 19.064 6.82113 22.456 6.82113 26.232Z"
              fill="black"
              stroke="black"
              strokeWidth="0.5"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 1 }}
              transition={{
                pathLength: { duration: 2, delay: 0.4 },
                fillOpacity: { duration: 3, delay: 0.4 },
              }}
            />
          </motion.svg>
          <motion.svg
            width="44"
            height="71"
            viewBox="0 0 44 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M35.9589 71L17.4309 45.368L6.77488 55.352V71H0.246875V0.919998H6.77488V48.344L35.0949 21.08H42.2949L21.8469 41.528L43.0629 71H35.9589Z"
              fill="black"
              stroke="black"
              strokeWidth="0.5"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 1 }}
              transition={{
                pathLength: { duration: 2, delay: 0.6 },
                fillOpacity: { duration: 3, delay: 0.6 },
              }}
            />
          </motion.svg>
          <motion.svg
            width="8"
            height="69"
            viewBox="0 0 8 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M0.342731 71V20.984H6.87073V71H0.342731ZM0.342731 10.52V0.919998H6.87073V10.52H0.342731Z"
              fill="black"
              stroke="black"
              strokeWidth="0.5"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 1 }}
              transition={{
                pathLength: { duration: 2, delay: 0.8 },
                fillOpacity: { duration: 3, delay: 0.8 },
              }}
            />
          </motion.svg>
          <motion.svg
            width="30"
            height="68"
            viewBox="0 0 30 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M29.6219 64.6C29.1099 64.792 28.3099 65.144 27.2219 65.656C26.1339 66.168 24.8219 66.616 23.2859 67C21.7499 67.384 20.0859 67.576 18.2939 67.576C16.4379 67.576 14.6779 67.224 13.0139 66.52C11.4139 65.816 10.1339 64.76 9.17388 63.352C8.21388 61.88 7.73388 60.088 7.73388 57.976V22.168H0.821875V16.984H7.73388V0.0879974H14.2619V16.984H25.7819V22.168H14.2619V56.152C14.3899 57.944 15.0299 59.288 16.1819 60.184C17.3979 61.08 18.7739 61.528 20.3099 61.528C22.1019 61.528 23.7339 61.24 25.2059 60.664C26.6779 60.024 27.5739 59.576 27.8939 59.32L29.6219 64.6Z"
              fill="black"
              stroke="black"
              strokeWidth="0.5"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 1 }}
              transition={{
                pathLength: { duration: 2, delay: 1 },
                fillOpacity: { duration: 3, delay: 1 },
              }}
            />
          </motion.svg>
        </div>
        <motion.h2
          className=" text-3xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Rezerwuj wygodnie
        </motion.h2>
      </div>
      <motion.div className=" absolute bottom-16 z-20 w-full">
        <div className="max-w-[200px] sm:max-w-[400px] mx-auto">
          <AutocompleteInput />
          <Button onPress={onButtonClick} className=" mx-auto mt-8 block">
            Szukaj
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
