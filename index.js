// //Q1
function delay() {
    setTimeout(function() {
      console.log("Hello World");
    }, 5000); 
  }
  
  delay()

//Q2

function display() {
    setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const currentTime = `${hours}:${minutes}:${seconds}`;
      console.log(currentTime);
    }, 1000);
  }


  display();

  //Q3

  function multiply(num1, num2) {
  return num1 * num2;
}

function Result_1(result) {
  setTimeout(function() {
    console.log("The result is:", result);
  }, 1000);
}

// Example
const num1 = 5;
const num2 = 7;
const result = multiply(num1, num2);
Result_1(result);

//Q4

function countdown(number) {
  return new Promise((resolve, reject) => {
    let currentNumber = number;

    const intervalId = setInterval(() => {
      console.log(currentNumber);
      currentNumber--;

      if (currentNumber < 0) {
        clearInterval(intervalId);
        resolve();
      }
    }, 1000);
  });
}

// For Example:
countdown(5)
  .then(() => {
    console.log("Countdown complete!");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

  //Q5
  function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        if (!response.ok) {
          throw new Error(" response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetched data:", data);
      })
      .catch(error => {
        console.error(" error occurred:", error);
      });
  }
  
  // Example 
  fetchData();

  //Q6

  
  function sum(numbers) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        resolve(sum);
      }, 2000);
    });
  }
  
  // For Example 
  const numbers = [1, 2, 3, 4, 5];
  sum(numbers)
    .then(result => {
      console.log("Sum:", result);
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });

    //Q7

    function repeat(func, times) {
      let counter = 0;
    
      const intervalId = setInterval(() => {
        func();
    
        counter++;
        if (counter === times) {
          clearInterval(intervalId);
        }
      }, 500);
    }
    
    // Example 
    function sayHello() {
      console.log("Hello!");
    }
    
    repeat(sayHello, 5);

    //Q8

    function fetchRandomUser() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          fetch("https://randomuser.me/api/")
            .then(response => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
            .then(data => {
              const user = data.results[0];
              const firstName = user.name.first;
              const lastName = user.name.last;
              resolve(`${firstName} ${lastName}`);
            })
            .catch(error => {
              reject(error);
            });
        }, 1000);
      });
    }
    
    // Example
    fetchRandomUser()
      .then(fullName => {
        console.log("Random user:", fullName);
      })
      .catch(error => {
        console.error("An error occurred:", error);
      });
    
      //Q9

      function waitForCondition(condition, interval) {
        return new Promise((resolve, reject) => {
          const intervalId = setInterval(() => {
            if (condition()) {
              clearInterval(intervalId);
              resolve();
            }
          }, interval);
        });
      }
      
      // Example 
      function checkCondition() {
        // condition logic
        return Math.random() > 0.5; 
      }
      
      function handleSuccess() {
        console.log("Condition met! Success!");
      }
      
      waitForCondition(checkCondition, 1000)
        .then(handleSuccess)
        .catch(error => {
          console.error(" error occurred:", error);
        });

//Q10

function fetchMultipleUrls(urls) {
  const promises = urls.map(url => {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        resolve(null); // Skip request and resolve with null after 3 seconds
      }, 3000);

      fetch(url)
        .then(response => {
          clearTimeout(timeoutId); // Clear the timeout if the request completes before the timeout
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  });

  return Promise.all(promises);
}

// Example 
const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/photos"
];

fetchMultipleUrls(urls)
  .then(results => {
    console.log("Resolved data:", results);
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });

      
    
  
  