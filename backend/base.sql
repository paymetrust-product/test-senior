-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           PostgreSQL 14.5, compiled by Visual C++ build 1914, 64-bit
-- SE du serveur:                
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES  */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Listage des données de la table public.article : 2 rows
/*!40000 ALTER TABLE "article" DISABLE KEYS */;
INSERT INTO "article" ("id", "title", "slug", "content", "createdAt", "userId", "url", "categoriesId") VALUES
	(1, 'nnn – Un navigateur de fichiers en CLI qui en a sous le pied', 'nnn', 'Si vous faites partie de ces gens qui aiment utiliser des applications simples, légères, mais néanmoins puissantes et modulables, peut-être devriez-vous tester nnn. Il s’agit d’un explorateur de fichiers en ligne de commande, conçu dans le but de fournir une solution légère, ultra optimisée en termes de ressources et facile à prendre en main. Présenté comme ça nous pourrions nous attendre à un truc hyper minimaliste, mais sous ses airs ultra light nnn en a sous le pied, et offre un panel d’options et de possibilités assez impressionnant.', '2023-06-22 22:06:17.89633', NULL, 'https://la-vache-libre.org/wp-content/uploads/2019/04/lavachelibre@lavachelibre-OMEN-_001.png', NULL),
	(2, 'Argonauta – Une prévisualisation des fichiers identique à celle des applications sous GNOME', 'argonauta', 'Element', '2023-06-22 22:23:36.790391', NULL, 'https://la-vache-libre.org/wp-content/uploads/2019/03/Argonauta-1024x576.png', NULL);
/*!40000 ALTER TABLE "article" ENABLE KEYS */;

-- Listage des données de la table public.article_categories_category : -1 rows
/*!40000 ALTER TABLE "article_categories_category" DISABLE KEYS */;
/*!40000 ALTER TABLE "article_categories_category" ENABLE KEYS */;

-- Listage des données de la table public.category : -1 rows
/*!40000 ALTER TABLE "category" DISABLE KEYS */;
INSERT INTO "category" ("id", "name", "slug", "createdAt") VALUES
	(2, 'linux', 'linux', '2023-06-22 22:03:59.50805'),
	(3, 'macos', 'macos', '2023-06-22 22:04:05.826562'),
	(4, 'macos', 'macos', '2023-06-22 22:05:27.184137');
/*!40000 ALTER TABLE "category" ENABLE KEYS */;

-- Listage des données de la table public.category_articles_article : -1 rows
/*!40000 ALTER TABLE "category_articles_article" DISABLE KEYS */;
/*!40000 ALTER TABLE "category_articles_article" ENABLE KEYS */;

-- Listage des données de la table public.comment : -1 rows
/*!40000 ALTER TABLE "comment" DISABLE KEYS */;
INSERT INTO "comment" ("id", "title", "content", "slug", "createdAt", "articleId", "userId") VALUES
	(1, 'tooparkzer comment', 'Element Comment', 'tooparkzer-comment', '2023-06-23 11:00:16.85901', NULL, NULL);
/*!40000 ALTER TABLE "comment" ENABLE KEYS */;

-- Listage des données de la table public.user : -1 rows
/*!40000 ALTER TABLE "user" DISABLE KEYS */;
INSERT INTO "user" ("id", "nom", "prenoms", "username", "slug", "password", "createdAt") VALUES
	(1, 'guelade', 'kevin', 'kevingueladegmail.com', 'kevin', '$2b$10$ZvxPEx0xK9ocHobP6OoRPeMNIH/F5lyN1SfNzjpCDu2.dYIeE8nKy', '2023-06-22 22:08:33.55237');
/*!40000 ALTER TABLE "user" ENABLE KEYS */;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
