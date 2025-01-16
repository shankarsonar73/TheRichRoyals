import React, { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"
import { ChevronLeft, ChevronRight } from "lucide-react"
import toast from "react-hot-toast"
import Section from "./Section"
import Button from "./Button"

export default function CourseList1() {
  const [offers, setOffers] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingOffer, setEditingOffer] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOffer, setSelectedOffer] = useState(null)

  useEffect(() => {
    fetchOffers()
  }, [])

  const fetchOffers = async () => {
    try {
      const { data, error } = await supabase
        .from("course_offers")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) throw error
      setOffers(data || [])
    } catch (error) {
      console.error("Error fetching offers:", error)
      toast.error("Failed to load courses")
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async id => {
    if (!window.confirm("Are you sure you want to delete this course?")) return

    try {
      const { error } = await supabase
        .from("course_offers")
        .delete()
        .eq("id", id)

      if (error) throw error

      toast.success("Course deleted successfully")
      setOffers(offers.filter(offer => offer.id !== id))
      if (selectedOffer?.id === id) setSelectedOffer(null)
      if (editingOffer?.id === id) setEditingOffer(null)
    } catch (error) {
      console.error("Error deleting course:", error)
      toast.error("Failed to delete course")
    }
  }

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === offers.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? offers.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [offers.length])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  if (offers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No courses available yet.</p>
      </div>
    )
  }

  return (
    <Section>
      <div className="container">
        <div className="relative max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl  shadow-2xl p-[1px] border border-n-1/10">
            <div className="rounded-3xl bg-black h-full w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {offers.map(offer => (
                  <div
                    key={offer.id}
                    className="w-full flex-shrink-0"
                    style={{ width: "100%" }}
                  >
                    
                    <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                      <div className="absolute inset-0">
                        <img
                          src={offer.image_url}
                          className="h-full w-full object-cover"
                          width={630}
                          height={750}
                          alt="robot"
                        />
                      </div>

                      <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                        <h4 className="h4 mb-4">{offer.title}</h4>
                        <p className="body-2 mb-[3rem] text-white">
                          {offer.description}
                          <br />
                          <br />
                          {/* <strong>Price: ₹{offer.price}</strong> */}
                          <span>
                            Price: ₹<del>{offer.price + 2000}</del>{' '}
                            <strong>₹{offer.price}</strong>
                          </span>
                          <br></br> <br></br>
                          <Button href="https://api.whatsapp.com/send/?phone=%2B918668417664&text&type=phone_number&app_absent=0">
                            Start Now
                          </Button>
                        </p>
                      </div>


                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-indigo-400 w-4" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
