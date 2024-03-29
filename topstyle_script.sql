USE [master]
GO
/****** Object:  Database [TopStyleDB]    Script Date: 5/5/2021 4:04:27 PM ******/
CREATE DATABASE [TopStyleDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'TopStyleDB', FILENAME = N'D:\SQL\MSSQL15.MSSQLSERVER\MSSQL\DATA\TopStyleDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'TopStyleDB_log', FILENAME = N'D:\SQL\MSSQL15.MSSQLSERVER\MSSQL\DATA\TopStyleDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [TopStyleDB] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [TopStyleDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [TopStyleDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [TopStyleDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [TopStyleDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [TopStyleDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [TopStyleDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [TopStyleDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [TopStyleDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [TopStyleDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [TopStyleDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [TopStyleDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [TopStyleDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [TopStyleDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [TopStyleDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [TopStyleDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [TopStyleDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [TopStyleDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [TopStyleDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [TopStyleDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [TopStyleDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [TopStyleDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [TopStyleDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [TopStyleDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [TopStyleDB] SET RECOVERY FULL 
GO
ALTER DATABASE [TopStyleDB] SET  MULTI_USER 
GO
ALTER DATABASE [TopStyleDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [TopStyleDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [TopStyleDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [TopStyleDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [TopStyleDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [TopStyleDB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'TopStyleDB', N'ON'
GO
ALTER DATABASE [TopStyleDB] SET QUERY_STORE = OFF
GO
USE [TopStyleDB]
GO
/****** Object:  Table [dbo].[Order]    Script Date: 5/5/2021 4:04:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Order](
	[OrderID] [int] IDENTITY(1,1) NOT NULL,
	[Email] [nvarchar](50) NOT NULL,
	[OrderDate] [date] NOT NULL,
	[TotalPrice] [int] NOT NULL,
 CONSTRAINT [PK_Order] PRIMARY KEY CLUSTERED 
(
	[OrderID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderDetails]    Script Date: 5/5/2021 4:04:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderDetails](
	[OrderID] [int] NOT NULL,
	[ProductID] [int] NOT NULL,
	[Quantity] [int] NOT NULL,
 CONSTRAINT [PK_OrderDetails] PRIMARY KEY CLUSTERED 
(
	[OrderID] ASC,
	[ProductID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 5/5/2021 4:04:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[ProductID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Price] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](1000) NOT NULL,
	[Category] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[ProductID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 5/5/2021 4:04:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[Email] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Address] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_User_1] PRIMARY KEY CLUSTERED 
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Order] ON 

INSERT [dbo].[Order] ([OrderID], [Email], [OrderDate], [TotalPrice]) VALUES (45, N'linus@linus.se', CAST(N'2021-04-12' AS Date), 525000)
SET IDENTITY_INSERT [dbo].[Order] OFF
GO
INSERT [dbo].[OrderDetails] ([OrderID], [ProductID], [Quantity]) VALUES (45, 1, 2)
INSERT [dbo].[OrderDetails] ([OrderID], [ProductID], [Quantity]) VALUES (45, 4, 1)
GO
SET IDENTITY_INSERT [dbo].[Product] ON 

INSERT [dbo].[Product] ([ProductID], [Name], [Price], [Description], [Category]) VALUES (1, N'Scout Bobber', N'150000', N'The Indian Scout Bobber has cleverly mixed old-school styling and modern-day performance, with refinement and a healthy splash of the American dream. Short-travel suspension is crashy over bumps, ground clearance limited and the riding position might not be great for everyone’s back, but the new Scout Bobber has a jewel-like motor, feel-good handling and impeccable build quality.', N'Custom')
INSERT [dbo].[Product] ([ProductID], [Name], [Price], [Description], [Category]) VALUES (2, N'Ducati Panigale V4R', N'350000', N'It’ll be tractable on the road, despite its short-stroke motor and still has service intervals way more generous than any of its rivals. But it’s just like a factory racer when you push on and so brutally powerful, light and unapologetically stiff, you’ll need the strength, stamina and skill of a pro to feel the real benefit of the wings and do justice to the electronics, chassis and engine.', N'Race')
INSERT [dbo].[Product] ([ProductID], [Name], [Price], [Description], [Category]) VALUES (3, N'Suzuki SV1000S', N'70000', N'The Suzuki SV1000 is a purpose built big capacity, sensibly priced, road going sporty V-twin. Ok, the engine’s nicked from Suzuki’s old TL1000S but the rest of the SV1000 is all-new yet the price tag is very reasonable new or used. The faired Suzuki SV1000 ‘S’ version has lower bars but is the better all-rounder. The unfaired SV1000 with higher bars is a real funster if less competent on the motorway.', N'Sport Touring')
INSERT [dbo].[Product] ([ProductID], [Name], [Price], [Description], [Category]) VALUES (4, N'MV Agusta Brutal 800 Dragster', N'225000', N'Build quality and paint finishes are stunning, its gravelly, mechanical soundtrack is to die for and it has one of the most addictive auto-blippers around. It’s quick, has superb brakes and oozes character, but fuelling and handling are fussy and for the money the old-school LCD dash and tyres leave you feeling short-changed. ', N'Naked')
SET IDENTITY_INSERT [dbo].[Product] OFF
GO
INSERT [dbo].[User] ([Email], [Password], [Name], [Address]) VALUES (N'linus@linus.se', N'Linus123!', N'Linus', N'Villebrådsgatan')
INSERT [dbo].[User] ([Email], [Password], [Name], [Address]) VALUES (N'pelle@pelle.se', N'Pelle123!', N'Pelle', N'Pellegatan')
GO
ALTER TABLE [dbo].[Order]  WITH CHECK ADD  CONSTRAINT [FK_Order_User] FOREIGN KEY([Email])
REFERENCES [dbo].[User] ([Email])
GO
ALTER TABLE [dbo].[Order] CHECK CONSTRAINT [FK_Order_User]
GO
ALTER TABLE [dbo].[OrderDetails]  WITH CHECK ADD  CONSTRAINT [FK_OrderDetails_Order] FOREIGN KEY([OrderID])
REFERENCES [dbo].[Order] ([OrderID])
GO
ALTER TABLE [dbo].[OrderDetails] CHECK CONSTRAINT [FK_OrderDetails_Order]
GO
ALTER TABLE [dbo].[OrderDetails]  WITH CHECK ADD  CONSTRAINT [FK_OrderDetails_Product] FOREIGN KEY([ProductID])
REFERENCES [dbo].[Product] ([ProductID])
GO
ALTER TABLE [dbo].[OrderDetails] CHECK CONSTRAINT [FK_OrderDetails_Product]
GO
USE [master]
GO
ALTER DATABASE [TopStyleDB] SET  READ_WRITE 
GO
