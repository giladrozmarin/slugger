const slug = (...strings) => {
    const regex = /\s+/g;
  
    return strings
      .map((string) => string.trim().split(regex).join("-"))
      .join("-");
  };
  
  module.exports = { slug };
  
  console.log(slug("cleopatra!", "viva la viva   ", "hello from tel aviva"));
  