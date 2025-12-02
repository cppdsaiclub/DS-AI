import { Box, Typography, Button, Divider, IconButton, Collapse, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import SchoolIcon from '@mui/icons-material/School';

const AdvisorContent = () => {
    
    
    //const [boardType, setBoardType] = useState('current');
    //const handleBoardTypeChange = (event, newBoardType) => {
    //if (newBoardType !== null) {
    //    setBoardType(newBoardType);
    //}
    //};

    const advisors = [
        { 
            name: 'Dr. Ericcson Santa Marin',
            image: '/MeganWeb.JPG', //placeholder
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            research: {
                focus: 'AI for Threat Intelligence (ATI)',
                opportunities: 'CALSys Lab',
                researchLink: 'https://www.cpp.edu/calsys/index.shtml',
            },
            contact: {
                email: 'santanamarin@cpp.edu',
                hours: 'M W | 2:30 PM - 3:30 PM | 5:30 PM - 6:30 PM',
                location: 'Building 8-39',
                phone: '909-869-3909',
            },
            // Add more details about Dr. Ericcson Santa Marin
            /* 
            photos, bios
            Their research areas & opportunities / expertise
            Contact information and/or office hours
            */
        },
        {
            name: 'John Korah',
            image: '',
            message: '',
            research: {
                focus: '',
                opportunities: '',
                researchLink: '',
            },
            contact: {
                email: 'jkorah@cpp.edu',
                hours: 'M | 1:00 PM - 3:00 PM (ZOOM) W | 1:15 PM - 03:15 PM (ZOOM AND IN PERSON)',
                location: 'Building 8-15',
                phone: '909-869-3441',
            },
        },
        {
            name: 'Sai Kosaraju',
            image: '',
            message: '',
            research: {
                focus: '',
                opportunities: '',
                researchLink: '',
            },
            contact: {
                email: 'skosaraju@cpp.edu',
                hours: '',
                location: 'Building 8-46',
                phone: '909-869-3542',
            },
        } 

    ]; 
    // Create Cards/Boxes for each advisor with their information
    
  //const AdvisorCard = ({ advisor }) => {
   //const [open, setOpen] = useState(false);

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Grid container spacing={4}>

        {advisors.map((advisor, index) => (

            <Grid item xs={12} md={4} key={index}>

            <Box
                sx={{
                p: 4,
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: "background.paper",
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
                color: "white"  
                }}
            >
              <Box>
                <Box
                  component="img"
                  src={advisor.image}
                  alt={advisor.name}
                  sx={{
                    width: 120,
                    height: 120,
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
              </Box>

                <Box sx={{ flex: 1 }}>

                <Typography variant="h6">
                    {advisor.name}
                </Typography>

                <Typography sx={{ mb: 2 }}>
                    {advisor.message}
                </Typography>

                <Button onClick={() => handleToggle(index)}>
                    {openIndex === index ? "Hide Details" : "View Details"}
                </Button>

                </Box>

                <Collapse in={openIndex === index}>

                <Box sx={{ mt: 3 }}>
                    
                    <Typography>
                    <strong>Research Focus:</strong> {advisor.research.focus}
                    </Typography>

                    <Typography>
                    <strong>Email:</strong> {advisor.contact.email}
                    </Typography>

                    <Typography>
                    <strong>Phone:</strong> {advisor.contact.phone}
                    </Typography>

                </Box>
                </Collapse>

            </Box>
            </Grid>

        ))}
        </Grid>
    );
    //};
};
/*
  return (
    <Box sx={{ py: 8 }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Grid container spacing={4}>
          {advisors.map((advisor) => (
            <Grid item xs={12} sm={6} md={4} key={advisor.id}>
              <AdvisorCard advisor={advisor} />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );



    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };
        <Box sx={{ pb: 4, pt: 0 }}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                <motion.div variants={itemVariants}>
                    <Box sx={{ mb: 7.2 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3.6, justifyContent: 'center' }}>
                                <Box sx={accentBarSx} />
                                <Typography variant="h4" sx={sectionTitleSx}>
                                    What's Provided FREE for Participating Members
                                </Typography>
                            </Box>
                        </motion.div>
*/
/*
Wrapper:
<Grid container spacing={4}>
  {advisors.map((advisor) => (
    <Grid item xs={12} sm={6} md={4} key={advisor.id}>
      <AdvisorCard advisor={advisor} />
    </Grid>
  ))}
</Grid>

const AdvisorCard = ({ advisor }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <motion.div variants={itemVariants}>
      <Box
        sx={{
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          backgroundColor: "background.paper",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src={advisor.image}
            alt={advisor.name}
            sx={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              objectFit: "cover",
              mb: 2,
            }}
          />

          <Typography variant="h6">{advisor.name}</Typography>
          <Typography sx={{ mb: 2 }}>{advisor.message}</Typography>

          <Button onClick={() => setOpen(!open)}>
            {open ? "Hide Details" : "View Details"}
          </Button>
        </Box>

        <Collapse in={open}>
          <Box sx={{ mt: 3 }}>
            <Typography>
              <strong>Research Focus:</strong> {advisor.research.focus}
            </Typography>

            <Typography>
              <strong>Email:</strong> {advisor.contact.email}
            </Typography>
          </Box>
        </Collapse>
      </Box>
    </motion.div>
  );
};


*/
export default AdvisorContent;