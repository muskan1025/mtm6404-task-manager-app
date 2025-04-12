import React from "react";

const About = () => {
  return (
    <div className="card">
      <h2>About TaskMaster</h2>
      <p>
        TaskMaster is the ultimate task management tool designed to help you stay organized, increase productivity, and never miss a deadline. With its user-friendly interface, you can easily track your tasks, set priorities, and sync your progress across devices.
      </p>
      <p>
        Key Features:
        <ul>
          <li>Create and organize tasks into custom lists</li>
          <li>Set deadlines, reminders, and priorities</li>
          <li>Track task progress with easy-to-use checkboxes</li>
          <li>Offline functionality with Firestore, ensuring your data is always available, even without internet</li>
          <li>Sync your tasks seamlessly across devices, ensuring you're always up-to-date</li>
          <li>Customizable theme options for a personalized experience</li>
        </ul>
      </p>
      <p>
        TaskMaster is built with React and powered by Firebase Firestore, ensuring a fast, reliable, and scalable task management experience for all users.
      </p>
    </div>
  );
};

export default About;
