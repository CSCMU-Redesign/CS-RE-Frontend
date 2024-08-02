
CREATE TABLE courses (
    course_id int PRIMARY KEY,
    course_name varchar(255) NOT NULL,
    credit int NOT NULL
    total_required int,
    on_year int,
    on_semester int
);

INSERT INTO courses VALUES ('204111', 'Fundamentals of Programming', 3, 0);
INSERT INTO courses VALUES ('001101', 'Fundamental English 1', 3, 0);


CREATE TABLE prerequisites (
    course_id int PRIMARY KEY,
    prerequisite_id int NULL,
    group_no int NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    FOREIGN KEY (prerequisite_id) REFERENCES courses(course_id)
);