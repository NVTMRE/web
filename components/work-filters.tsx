"use client"

import { useMemo } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

interface SortOption {
  value: "stars" | "forks" | "updated" | "name"
  label: string
}

interface WorkFiltersProps {
  selectedLang?: string
  selectedSort: "stars" | "forks" | "updated" | "name"
  languages: string[]
  sortOptions: SortOption[]
}

export default function WorkFilters({ selectedLang, selectedSort, languages, sortOptions }: WorkFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const params = useMemo(() => {
    const params = new URLSearchParams(searchParams?.toString() ?? "")
    return params
  }, [searchParams])

  const handleLangChange = (lang: string) => {
    const next = new URLSearchParams(params.toString())

    if (lang === "all") {
      next.delete("lang")
    } else {
      next.set("lang", lang)
    }

    next.set("sort", selectedSort)

    const queryString = next.toString()
    router.push(queryString ? `/work?${queryString}` : "/work")
  }

  const handleSortChange = (sort: string) => {
    const next = new URLSearchParams(params.toString())
    next.set("sort", sort)
    if (selectedLang) {
      next.set("lang", selectedLang)
    } else {
      next.delete("lang")
    }
    router.push(`/work?${next.toString()}`)
  }

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <Tabs value={selectedLang ?? "all"} onValueChange={handleLangChange} className="w-full md:w-auto">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="all" className="rounded-full px-4 py-2 text-sm">
            All
          </TabsTrigger>
          {languages.map((lang) => (
            <TabsTrigger key={lang} value={lang} className="rounded-full px-4 py-2 text-sm">
              {lang}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">Sort</span>
        <Select value={selectedSort} onValueChange={handleSortChange}>
          <SelectTrigger className="min-w-[180px]">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
