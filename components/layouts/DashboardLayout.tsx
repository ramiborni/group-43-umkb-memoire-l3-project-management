import { motion } from "framer-motion";
import { ReactNode } from "react";

const DashboardLayout = ({child}:{child:ReactNode}) => {
    return (
        <motion.section initial="hidden" animate="visible" variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                delay: .4
              }
            },
          }}>
            Enter
        </motion.section>
    );
}

export default DashboardLayout;