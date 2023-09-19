import { Helper } from "../helper";
import { Event } from "../models/event";
import { ENTITIES } from "./mock-entities";
import { SPEAKERS } from "./mock-speakers";

export const EVENTS: Event[] = [
    {
        id: 1,
        entityId: Helper.randomIntFromInterval(1, ENTITIES.length),
        speakerId: Helper.randomIntFromInterval(1, SPEAKERS.length),
        name: "FinTechXperience",
        summary: "Explore the future of financial technology in this immersive event.",
        description: "Join us for a two-day journey into the world of fintech innovation. Network with industry leaders, attend interactive workshops, and gain hands-on experience with the latest fintech solutions.",
        date: Helper.randomFutureDate().toLocaleDateString(),
        time: Helper.randomTime().toLocaleString("en-US", {
            weekday: "long",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
           })
    }, 
    {
        id: 2,
        entityId: Helper.randomIntFromInterval(1, ENTITIES.length),
        speakerId: Helper.randomIntFromInterval(1, SPEAKERS.length),
        name: "CryptoConvergence Summit",
        summary: "Where blockchain, DeFi, and NFTs converge.",
        description: "Dive into the world of cryptocurrencies, decentralized finance, and non-fungible tokens at the CryptoConvergence Summit. Engage with top experts, discuss investment strategies, and explore the latest crypto trends.",
        date: Helper.randomFutureDate().toLocaleDateString(),
        time: Helper.randomTime().toLocaleString("en-US", {
            weekday: "long",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
           })
    }, 
    {
        id: 3,
        entityId: Helper.randomIntFromInterval(1, ENTITIES.length),
        speakerId: Helper.randomIntFromInterval(1, SPEAKERS.length),
        name: "RegTech Revolution",
        summary: "Navigating compliance in the digital age.",
        description: "Stay compliant and competitive with the latest regulatory technology. Join us for a one-day event featuring keynote speakers, panel discussions, and workshops on the evolving landscape of regulatory technology.",
        date: Helper.randomFutureDate().toLocaleDateString(),
        time: Helper.randomTime().toLocaleString("en-US", {
            weekday: "long",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
           })
    }, 
    {
        id: 4,
        entityId: Helper.randomIntFromInterval(1, ENTITIES.length),
        speakerId: Helper.randomIntFromInterval(1, SPEAKERS.length),
        name: "InsurTech Insights Forum",
        summary: "Innovating insurance for the future.",
        description: "Discover how technology is reshaping the insurance industry at the InsurTech Insights Forum. Explore emerging trends, case studies, and practical applications of insurtech solutions.",
        date: Helper.randomFutureDate().toLocaleDateString(),
        time: Helper.randomTime().toLocaleString("en-US", {
            weekday: "long",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
           })
    }, 
    {
        id: 5,
        entityId: Helper.randomIntFromInterval(1, ENTITIES.length),
        speakerId: Helper.randomIntFromInterval(1, SPEAKERS.length),
        name: "AI in Finance Expo",
        summary: "Exploring artificial intelligence's role in finance.",
        description: "Uncover the potential of AI in finance at the AI in Finance Expo. Attend sessions on machine learning, data analytics, and AI-driven investment strategies.",
        date: Helper.randomFutureDate().toLocaleDateString(),
        time: Helper.randomTime().toLocaleString("en-US", {
            weekday: "long",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
           })
    }, 
    {
        id: 6,
        entityId: Helper.randomIntFromInterval(1, ENTITIES.length),
        speakerId: Helper.randomIntFromInterval(1, SPEAKERS.length),
        name: "PayTech Connect",
        summary: "The future of digital payments.",
        description: "Join industry experts for a deep dive into the payments landscape. Discuss mobile wallets, contactless payments, and the latest payment innovations shaping the future of transactions.",
        date: Helper.randomFutureDate().toLocaleDateString(),
        time: Helper.randomTime().toLocaleString("en-US", {
            weekday: "long",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
           })
    }, 
    {
        id: 7,
        entityId: Helper.randomIntFromInterval(1, ENTITIES.length),
        speakerId: Helper.randomIntFromInterval(1, SPEAKERS.length),
        name: "WealthTech Summit",
        summary: "Transforming wealth management with technology.",
        description: "The WealthTech Summit is a two-day event focused on digital wealth management solutions, robo-advisors, and strategies for financial advisors.",
        date: Helper.randomFutureDate().toLocaleDateString(),
        time: Helper.randomTime().toLocaleString("en-US", {
            weekday: "long",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
           })
    }, 
    {
        id: 8,
        entityId: Helper.randomIntFromInterval(1, ENTITIES.length),
        speakerId: Helper.randomIntFromInterval(1, SPEAKERS.length),
        name: "Sustainable Finance Symposium",
        summary: "Finance for a better world.",
        description: "Explore the intersection of finance and sustainability at the Sustainable Finance Symposium. Learn how fintech is driving positive environmental and social impact.",
        date: Helper.randomFutureDate().toLocaleDateString(),
        time: Helper.randomTime().toLocaleString("en-US", {
            weekday: "long",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
           })
    }, 
    {
        id: 9,
        entityId: Helper.randomIntFromInterval(1, ENTITIES.length),
        speakerId: Helper.randomIntFromInterval(1, SPEAKERS.length),
        name: "FinTech Startup Expo",
        summary: "Showcasing the future of finance.",
        description: "Discover the latest innovations from promising fintech startups. This one-day expo provides a platform for startups to showcase their products and connect with investors and industry professionals.",
        date: Helper.randomFutureDate().toLocaleDateString(),
        time: Helper.randomTime().toLocaleString("en-US", {
            weekday: "long",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
           })
    }, 
    {
        id: 10,
        entityId: Helper.randomIntFromInterval(1, ENTITIES.length),
        speakerId: Helper.randomIntFromInterval(1, SPEAKERS.length),
        name: "Cybersecurity in Finance Summit",
        summary: "Protecting financial systems from cyber threats.",
        description: "Explore the critical role of cybersecurity in the financial sector. Engage with cybersecurity experts, learn about the latest threats, and discuss strategies to safeguard financial institutions.",
        date: Helper.randomFutureDate().toLocaleDateString(),
        time: Helper.randomTime().toLocaleString("en-US", {
            weekday: "long",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
           })
    }
]