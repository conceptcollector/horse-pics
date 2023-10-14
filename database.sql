CREATE TABLE horse_pic (
    id SERIAL PRIMARY KEY,
    image VARCHAR(420) NOT NULL,
    comments TEXT
)

INSERT INTO horse_pic (image)
VALUES
('images/horse_pics/Bernadette_Peters.jpg'),
('images/horse_pics/Charles_Manson.jpg'),
('images/horse_pics/cstums_rides.jpg'),
('images/horse_pics/Doja_Horse.jpg'),
('images/horse_pics/Henry_Cavill.jpg'),
('images/horse_pics/Henry_Kissinger_horse_pic.jpg'),
('images/horse_pics/horse_porn_slide_1.jpg'),
('images/horse_pics/horse_porn_slide_2.jpg'),
('images/horse_pics/horse_porn_slide_3.jpg'),
('images/horse_pics/horse_porn_slide_4.jpg'),
('images/horse_pics/horse_porn_slide_5.jpg'),
('images/horse_pics/horse_porn_slide_6.jpg'),
('images/horse_pics/horse_porn_slide_7.jpg'),
('images/horse_pics/horse_porn_slide_8.jpg'),
('images/horse_pics/horse_porn_slide_9.jpg'),
('images/horse_pics/horse_porn_slide_10.jpg'),
('images/horse_pics/horse_porn_slide_11.jpg'),
('images/horse_pics/hOrSe.jpg'),
('images/horse_pics/Johnny_Carson.jpg'),
('images/horse_pics/just_a_horse.jpg'),
('images/horse_pics/Kim_Kardhorseian.jpg'),
('images/horse_pics/majestic_af_horse.jpg'),
('images/horse_pics/Night_Horse.jpg'),
('images/horse_pics/Sam_Elliott_horse.jpg'),
('images/horse_pics/Secretariat_present_day.jpg'),
('images/horse_pics/Secretariat.jpg');

CREATE TABLE index (
    id SERIAL PRIMARY KEY,
    topic VARCHAR(420) NOT NULL,
    podcast VARCHAR(420) NOT NULL,
    episode VARCHAR(420) NOT NULL,
    comments TEXT
)

INSERT INTO index (topic, podcast, episode, comments)
VALUES
('Search and Destroy', 'The Roundtable of Gentlemen', 'Episode 1: It Begins',
'Intro song. Performed by The Stooges. David Bowie mix.')