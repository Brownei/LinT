USE lint;

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    description VARCHAR(199) NOT NULL,
    tech_stacks VARCHAR(199) NULL,
    problem VARCHAR(255) NULL,
    solution VARCHAR(255) NULL,
    requirements VARCHAR(255) NULL,
    is_paid BOOLEAN DEFAULT(FALSE)
)

CREATE TABLE articles (
    id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    content CHAR NOT NULL,
    author VARCHAR(199) FOREIGN KEY() NOT NULL,
    likes INT DEFAULT(0),
    comments VARCHAR(256) NULL
)

CREATE TABLE published_articles (
    id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    content CHAR NOT NULL,
    author VARCHAR(199) FOREIGN KEY() NOT NULL,
    likes INT DEFAULT(0),
    comments VARCHAR(256) NULL
)