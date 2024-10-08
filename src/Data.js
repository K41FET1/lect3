const getRandomColor = () => {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "teal", "brown"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  
  const cardsData = [
    {
      id: 1,
      name: "Card 1",
      age: 15,
      desc: "This is the first card",
      src: "https://via.placeholder.com/150",
      bg: getRandomColor()  // Assign random color
    },
    {
      id: 2,
      name: "Card 2",
      age: 15,
      desc: "This is the second card",
      src: "https://via.placeholder.com/150",
      bg: getRandomColor()  // Assign random color
    },
    {
      id: 3,
      name: "Card 3",
      age: 15,
      desc: "This is the third card",
      src: "https://via.placeholder.com/150",
      bg: getRandomColor()  // Assign random color
    }
  ];
  
  export default cardsData;
  