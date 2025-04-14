import { motion } from "framer-motion";
import { LayoutBox } from "./LayoutBox";
import CONTACT_US_IMG from "../assets/contact_us.avif";

export const ContactEntry = () => {
  const paths = [
    "M10.4671 91V22.936H17.1871V62.488L54.7231 22.84H62.1151L34.2751 52.792L63.5551 91H55.9711L29.9551 56.824L17.1871 70.072V91H10.4671Z",
    "M87.618 91.96C84.034 91.96 80.706 91.288 77.634 89.944C74.626 88.536 72.002 86.648 69.762 84.28C67.586 81.848 65.89 79.096 64.674 76.024C63.458 72.888 62.85 69.592 62.85 66.136C62.85 62.552 63.458 59.224 64.674 56.152C65.89 53.016 67.618 50.264 69.858 47.896C72.098 45.464 74.722 43.576 77.73 42.232C80.802 40.824 84.13 40.12 87.714 40.12C91.298 40.12 94.594 40.824 97.602 42.232C100.61 43.576 103.234 45.464 105.474 47.896C107.714 50.264 109.442 53.016 110.658 56.152C111.874 59.224 112.482 62.552 112.482 66.136C112.482 69.592 111.874 72.888 110.658 76.024C109.442 79.096 107.714 81.848 105.474 84.28C103.298 86.648 100.674 88.536 97.602 89.944C94.594 91.288 91.266 91.96 87.618 91.96ZM69.474 66.232C69.474 69.944 70.274 73.336 71.874 76.408C73.538 79.416 75.746 81.816 78.498 83.608C81.25 85.336 84.29 86.2 87.618 86.2C90.946 86.2 93.986 85.304 96.738 83.512C99.49 81.72 101.698 79.288 103.362 76.216C105.026 73.08 105.858 69.688 105.858 66.04C105.858 62.328 105.026 58.936 103.362 55.864C101.698 52.792 99.49 50.36 96.738 48.568C93.986 46.776 90.946 45.88 87.618 45.88C84.29 45.88 81.25 46.808 78.498 48.664C75.81 50.52 73.634 52.984 71.97 56.056C70.306 59.064 69.474 62.456 69.474 66.232Z",
    "M158.859 91H152.331V63.064C152.331 57.176 151.467 52.888 149.739 50.2C148.011 47.448 145.291 46.072 141.579 46.072C139.019 46.072 136.491 46.712 133.995 47.992C131.499 49.208 129.291 50.904 127.371 53.08C125.515 55.192 124.171 57.624 123.339 60.376V91H116.811V40.984H122.763V52.312C124.107 49.88 125.867 47.768 128.043 45.976C130.219 44.12 132.683 42.68 135.435 41.656C138.187 40.632 141.035 40.12 143.979 40.12C146.731 40.12 149.067 40.632 150.987 41.656C152.907 42.68 154.443 44.152 155.595 46.072C156.747 47.928 157.579 50.2 158.091 52.888C158.603 55.512 158.859 58.456 158.859 61.72V91Z",
    "M190.562 88.6C190.05 88.792 189.25 89.144 188.162 89.656C187.074 90.168 185.762 90.616 184.226 91C182.69 91.384 181.026 91.576 179.234 91.576C177.378 91.576 175.618 91.224 173.954 90.52C172.354 89.816 171.074 88.76 170.114 87.352C169.154 85.88 168.674 84.088 168.674 81.976V46.168H161.762V40.984H168.674V24.088H175.202V40.984H186.722V46.168H175.202V80.152C175.33 81.944 175.97 83.288 177.122 84.184C178.338 85.08 179.714 85.528 181.25 85.528C183.042 85.528 184.674 85.24 186.146 84.664C187.618 84.024 188.514 83.576 188.834 83.32L190.562 88.6Z",
    "M193.512 75.6C193.512 72.464 194.408 69.776 196.2 67.536C197.992 65.232 200.456 63.472 203.592 62.256C206.792 60.976 210.472 60.336 214.632 60.336C217.064 60.336 219.592 60.528 222.216 60.912C224.84 61.296 227.176 61.872 229.224 62.64V58.416C229.224 54.192 227.976 50.832 225.48 48.336C222.984 45.84 219.528 44.592 215.112 44.592C212.424 44.592 209.768 45.104 207.144 46.128C204.584 47.088 201.896 48.528 199.08 50.448L196.584 45.84C199.848 43.6 203.048 41.936 206.184 40.848C209.32 39.696 212.52 39.12 215.784 39.12C221.928 39.12 226.792 40.88 230.376 44.4C233.96 47.92 235.752 52.784 235.752 58.992V82.128C235.752 83.024 235.944 83.696 236.328 84.144C236.712 84.528 237.32 84.752 238.152 84.816V90C237.448 90.064 236.84 90.128 236.328 90.192C235.816 90.256 235.432 90.256 235.176 90.192C233.576 90.128 232.36 89.616 231.528 88.656C230.696 87.696 230.248 86.672 230.184 85.584L230.088 81.936C227.848 84.816 224.936 87.056 221.352 88.656C217.768 90.192 214.12 90.96 210.408 90.96C207.208 90.96 204.296 90.288 201.672 88.944C199.112 87.536 197.096 85.68 195.624 83.376C194.216 81.008 193.512 78.416 193.512 75.6ZM227.016 79.44C227.72 78.544 228.264 77.68 228.648 76.848C229.032 76.016 229.224 75.28 229.224 74.64V67.344C227.048 66.512 224.776 65.872 222.408 65.424C220.104 64.976 217.768 64.752 215.4 64.752C210.728 64.752 206.952 65.68 204.072 67.536C201.192 69.392 199.752 71.92 199.752 75.12C199.752 76.976 200.232 78.736 201.192 80.4C202.152 82 203.56 83.344 205.416 84.432C207.272 85.456 209.448 85.968 211.944 85.968C215.08 85.968 217.992 85.36 220.68 84.144C223.432 82.928 225.544 81.36 227.016 79.44Z",
    "M278.959 90L260.431 64.368L249.775 74.352V90H243.247V19.92H249.775V67.344L278.095 40.08H285.295L264.847 60.528L286.063 90H278.959Z",
    "M317.562 87.6C317.05 87.792 316.25 88.144 315.162 88.656C314.074 89.168 312.762 89.616 311.226 90C309.69 90.384 308.026 90.576 306.234 90.576C304.378 90.576 302.618 90.224 300.954 89.52C299.354 88.816 298.074 87.76 297.114 86.352C296.154 84.88 295.674 83.088 295.674 80.976V45.168H288.762V39.984H295.674V23.088H302.202V39.984H313.722V45.168H302.202V79.152C302.33 80.944 302.97 82.288 304.122 83.184C305.338 84.08 306.714 84.528 308.25 84.528C310.042 84.528 311.674 84.24 313.146 83.664C314.618 83.024 315.514 82.576 315.834 82.32L317.562 87.6Z",
  ];

  return (
    <div className="relative flex justify-center items-center py-60">
      <LayoutBox>
        <>
          <div
            className="absolute top-0 left-0 w-full h-full opacity-35 -z-10"
            style={{
              backgroundImage: `url(${CONTACT_US_IMG})`,
              backgroundSize: "cover",
              backgroundPosition: "50%",
              filter: "grayscale(0.8)",
            }}
          />
          <motion.svg
            width="300"
            height="114"
            viewBox="0 0 320 114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {paths.map((d, index) => (
              <motion.path
                key={index}
                d={d}
                fill="black"
                stroke="black"
                strokeWidth="0.5"
                initial={{ pathLength: 0, fillOpacity: 0 }}
                animate={{
                  pathLength: 1,
                  fillOpacity: 1,
                }}
                transition={{
                  duration: 3,
                  delay: index * 0.3,
                }}
              />
            ))}
          </motion.svg>
        </>
      </LayoutBox>
    </div>
  );
};
