"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star, Clock, MapPin, Heart, Users, Plane, Utensils,
  Shield, UserCheck, Car, Hotel, ChevronRight, Eye, AlertCircle,
} from "lucide-react";
import clsx from "clsx";
import CountdownTimer from "./CountdownTimer";
import { Tour, hoursFromNow } from "@/lib/tours-data";
import { useLang } from "@/lib/language-context";

const badgeStyles = {
  travelersChoice: { className: "bg-yellow-400 text-yellow-900", icon: "🏆" },
  hot: { className: "bg-red-500 text-white", icon: "🔥" },
  sale: { className: "bg-green-500 text-white", icon: "💰" },
  new: { className: "bg-primary text-white", icon: "✨" },
  bestValue: { className: "bg-accent text-white", icon: "💎" },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={13}
          className={clsx(
            i <= Math.round(rating) ? "fill-gold text-gold" : "fill-gray-200 text-gray-200"
          )}
        />
      ))}
    </div>
  );
}

function HotelStars({ stars }: { stars: number }) {
  return <span className="text-gold text-xs">{"★".repeat(stars)}</span>;
}

export default function TourCard({ tour }: { tour: Tour }) {
  const { t } = useLang();
  const [saved, setSaved] = useState(false);
  const [imageError, setImageError] = useState(false);

  const discount = Math.round(((tour.oldPrice - tour.price) / tour.oldPrice) * 100);
  const badge = tour.badge ? badgeStyles[tour.badge] : null;
  const badgeLabel = tour.badge ? t.tourCard.badges[tour.badge] : null;
  const dealEndsAt = tour.dealHoursLeft ? hoursFromNow(tour.dealHoursLeft) : null;

  const includedItems = [
    { show: tour.included.flight, icon: <Plane size={11} />, label: t.tourCard.includes.flight },
    { show: tour.included.hotel, icon: <Hotel size={11} />, label: t.tourCard.includes.hotel },
    { show: tour.included.meals.type !== "none", icon: <Utensils size={11} />, label: t.tourCard.includes.meals },
    { show: tour.included.transfer, icon: <Car size={11} />, label: t.tourCard.includes.transfer },
    { show: tour.included.guide, icon: <UserCheck size={11} />, label: t.tourCard.includes.guide },
    { show: tour.included.insurance, icon: <Shield size={11} />, label: t.tourCard.includes.insurance },
  ].filter((i) => i.show);

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gray-100">
        {!imageError ? (
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">
            {tour.flag}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {badge && badgeLabel && (
          <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${badge.className}`}>
            <span>{badge.icon}</span>
            {badgeLabel}
          </span>
        )}

        <span className="absolute top-3 right-12 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          -{discount}%
        </span>

        <button
          onClick={() => setSaved(!saved)}
          aria-label={saved ? "Saqlangan" : "Saqlash"}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-sm"
        >
          <Heart
            size={16}
            className={clsx("transition-colors", saved ? "fill-red-500 text-red-500" : "text-gray-400")}
          />
        </button>

        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          {tour.viewersCount && (
            <span className="flex items-center gap-1 text-[11px] text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
              <Eye size={11} />
              {tour.viewersCount} {t.tourCard.watching}
            </span>
          )}
          {tour.spotsLeft && tour.spotsLeft <= 5 && (
            <span className="flex items-center gap-1 text-[11px] text-white bg-red-600/80 backdrop-blur-sm px-2 py-1 rounded-full ml-auto">
              <AlertCircle size={11} />
              {t.tourCard.spotsLeft.replace("{n}", String(tour.spotsLeft))}
            </span>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1 gap-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-gray-400 text-xs">
            <MapPin size={12} />
            <span>{tour.flag} {tour.destination}, {tour.country}</span>
          </div>
          <HotelStars stars={tour.hotelStars} />
        </div>

        <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {tour.title}
        </h3>

        <p className="text-xs text-gray-400 -mt-1">{tour.hotelName}</p>

        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {tour.duration}
          </span>
          <span className="flex items-center gap-1">
            <Plane size={12} />
            {tour.departureCity}
          </span>
        </div>

        <div className="flex flex-wrap gap-1">
          {includedItems.map((item) => (
            <span
              key={item.label}
              className="flex items-center gap-1 text-[11px] bg-blue-50 text-primary px-2 py-0.5 rounded-full font-medium"
            >
              {item.icon}
              {item.label}
            </span>
          ))}
        </div>

        <blockquote className="text-xs text-gray-500 italic line-clamp-2 border-l-2 border-gray-200 pl-2">
          &ldquo;{tour.reviewSnippet}&rdquo;
        </blockquote>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded">
            {tour.rating}
          </div>
          <StarRating rating={tour.rating} />
          <span className="text-xs text-gray-400">({tour.reviewCount})</span>
        </div>

        {dealEndsAt && (
          <div className="flex items-center gap-2 bg-red-50 rounded-lg px-3 py-1.5">
            <span className="text-xs text-red-600 font-medium">{t.tourCard.dealEnds}</span>
            <CountdownTimer endsAt={dealEndsAt} />
          </div>
        )}

        {/* Price + CTA */}
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-end justify-between gap-2">
          <div>
            <div className="text-xs text-gray-400 line-through">
              ${tour.oldPrice.toLocaleString()}
            </div>
            <div className="text-xl font-extrabold text-primary leading-none">
              ${tour.price.toLocaleString()}
            </div>
            <div className="text-[11px] text-gray-400">{t.tourCard.perPerson}</div>
          </div>
          <Link
            href={`/tours/${tour.slug}`}
            className="flex items-center gap-1 bg-accent hover:bg-accent-dark text-white text-sm font-bold px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap"
          >
            {t.tourCard.book}
            <ChevronRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
