USE lint;

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    description VARCHAR(199) NOT NULL,
    tech_stacks VARCHAR(199) NULL,
    problem VARCHAR(255) NULL,
    solution VARCHAR(255) NULL,
    requirements VARCHAR(255) NULL,
    is_paid BOOLEAN DEFAULT(FALSE)
)