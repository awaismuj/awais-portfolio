import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { service } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description }) => (
  <Tilt className="xs:w-[300px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-10 px-8 min-h-[350px] flex flex-col justify-center items-center text-center"
      >
        <img src={icon} alt={title} className="w-20 h-20 object-contain" />
        <h3 className="text-white text-[22px] font-bold mt-4">{title}</h3>
        <p className="text-gray-300 text-[16px] mt-3">{description}</p>
      </div>
    </motion.div>
  </Tilt>
);

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I Offer</p>
        <h2 className={styles.sectionHeadText}>Services.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]"
      >
        I specialize in DevOps, cloud infrastructure, CI/CD automation, and
        software deployment. With a strong background in AWS, Terraform,
        Ansible, and Kubernetes, I help businesses streamline development
        processes, improve scalability, and optimize operational efficiency.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {service.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Services, "services");
