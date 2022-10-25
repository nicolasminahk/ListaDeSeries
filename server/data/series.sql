--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: serie; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.serie (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    active boolean NOT NULL,
    titulo text NOT NULL,
    descripcion text NOT NULL,
    estrellas integer NOT NULL,
    fecha timestamp with time zone NOT NULL,
    precio integer NOT NULL,
    genero text NOT NULL,
    atp boolean NOT NULL
);


--
-- Name: series; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.series (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    active boolean NOT NULL,
    titulo text NOT NULL,
    descripcion text NOT NULL,
    estrellas integer NOT NULL,
    fecha timestamp with time zone NOT NULL,
    precio integer NOT NULL,
    genero text NOT NULL,
    atp boolean NOT NULL
);


--
-- Data for Name: serie; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.serie (id, active, titulo, descripcion, estrellas, fecha, precio, genero, atp) FROM stdin;
653ded06-631a-4144-9ebe-b9f9ecb9b6ae	t	The Walking Dead	 Basado en la historieta escrita por Robert Kirkman, este drama crudo describe las vidas de un grupo de sobrevivientes que está siempre en movimiento en busca de un hogar seguro durante las semanas y meses de un apocalipsis zombi. 	5	2022-10-25 09:46:00-03	999	suspenso	t
cdbeda62-2069-4006-b36b-ce3a9329dafd	t	Severance	 Mark Scout lidera un equipo en Lumon Industries, cuyos empleados se han sometido a un procedimiento de despido, que implica la división quirúrgica de sus recuerdos entre el trabajo y la vida personal.	4	2022-10-25 09:47:00-03	800	suspenso	f
a48143b0-d1b5-4a18-a787-e50b40370ff7	t	Twin Peaks	 Un drama criminal mezclado con una dosis surrealista, esta serie es acerca del agente del FBI Dale Cooper, quien viaja a la pequeña ciudad de Twin Peaks para resolver el asesinato.	5	2022-10-25 09:48:00-03	120	suspenso	f
\.


--
-- Data for Name: series; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.series (id, active, titulo, descripcion, estrellas, fecha, precio, genero, atp) FROM stdin;
8f09b3e2-5a1e-4462-9f3f-961253da398d	t	Tween Peaks	Una serie de un homicidio 	4	2022-10-20 19:21:41.571-03	1234	terror	t
92ea9cb6-5be0-4ffa-bc8f-b06d1d997481	t	Tween Peaks	Una serie de un homicidio 	4	2022-10-20 19:21:40.515-03	1234	terror	t
98e4c493-27b3-4547-978c-2977c49284d3	f	zzz	dddddddddddd	4	2022-10-22 00:48:15.559-03	444	animada	t
\.


--
-- Name: serie PK_8c8f5d9ab9991a8b07a7b2726fa; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.serie
    ADD CONSTRAINT "PK_8c8f5d9ab9991a8b07a7b2726fa" PRIMARY KEY (id);


--
-- Name: series PK_e725676647382eb54540d7128ba; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.series
    ADD CONSTRAINT "PK_e725676647382eb54540d7128ba" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

