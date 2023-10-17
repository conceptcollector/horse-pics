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
'Intro song. Performed by The Stooges. David Bowie mix.'),
-- "Hey", first word of Roundtable
-- "Hi", first word by a distinct voice, that of Holden McNeely...
-- Ben fucks up the intro
-- Kevin Barnett
-- Holden McNeely
-- Ed Larson
-- Cupcake
-- Ben Kissel
-- Gary Coleman's death
-- Shannon Price (Gary Coleman's wife)
-- feeder/gainer
-- cake farts
-- dolphins in (2010) oil spill
-- Griswolds, Vacation
-- ghosts (specifically Gary Coleman)
-- Charlton Heston('s ghost)
-- Ed suggests a $20,000 reward to kill Shannon Price
-- Ted Haggart's new church
-- Rudy Giuliani
-- synthetic DNA
-- Islamic mosque
-- Jason Voohees
-- Ben's from Wisconsin
-- Wisconsin man is stealing dirty diapers
-- Texas? That man would have been dead (per Cupcake)
-- NY cops should no longer shoot to kill
-- Band of Brothers
-- 3 more deaths in Germany from WWII bomb
-- 24:46 into episode 1, Holden calls "Cupcake" Marcus
-- Ben's Opa was a Nazi Naval Commander
-- Ben's Vater fled because he didn't want to be the son of a Nazi
-- Ben's the grandson of a Nazi
-- Holden says "Mommy and Daddy loved me."
-- Holden's grandpa was a Golden Gloves champion
-- Hee Haw
-- Ben's grandpa was a huge political figure, started a labor union. Said the camps were terrible, though he didn't know about them. "Obviously, he was antisemetic." Also said that Germany almost took over the world and is the size of Wisconsin!
-- Pope was a Nazi ("Joey Ratz" - Marcus)
-- neonazis are coming back (2010)
-- Tea Party
-- Jackie Knotts (called Obama and his opponent ragheads)
-- Islamic mosque by WTC hole
-- Hell's Angels
-- Bum found plans to WTC plans
-- UHF
-- Superman
-- male pornstar got fired, killed someone, injured 3 others
-- Former podcast (Ben says "we used to..." (Holden?)) The Brain and the Beast
-- Marcus's boiler room is suggested as a location to murder Ed/have an orgy