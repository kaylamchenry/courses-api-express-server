// Function to fetch and display courses
async function fetchAndDisplayCourses() {
    const courseList = document.getElementById('courseList');
  
    try {
      // Fetch data from courses.json
      const response = await fetch('data/courses.json');
      const coursesData = await response.json();
  
      // Clear existing list items
      courseList.innerHTML = '';
  
      // Iterate through courses and add hyperlinks to the unordered list
      coursesData.forEach(course => {
        // Check if the necessary properties exist in the course object
        if (course && course.dept && course.courseNum && course.courseName) {
          const listItem = document.createElement('li');
  
          // Create a hyperlink with a URL that includes the course ID
          const link = document.createElement('a');
          link.textContent = `${course.dept} - ${course.courseNum}: ${course.courseName}`;
          
          // Configure the href to include the courseid query parameter
          link.href = `details.html?courseid=${course.id}`;
  
          // Append the hyperlink to the list item
          listItem.appendChild(link);
  
          // Append the list item to the unordered list
          courseList.appendChild(listItem);
        } else {
          console.error('Invalid course data:', course);
        }
      });
    } catch (error) {
      console.error('Error fetching and displaying courses:', error);
    }
  }
  
  // Call the function to fetch and display courses when the window has finished loading
  window.onload = fetchAndDisplayCourses;
  const urlParams = new URLSearchParams(location.search); // location.search is the way you access
        // the query string portion of the URL
  