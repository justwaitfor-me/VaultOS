"use client"

import { useState } from "react"
import { AtSign, ImageIcon, MoreHorizontal, PaperclipIcon, Plus, Search, Send, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AppLayout } from "@/components/app-layout"

export default function ChatAppPage() {
  const [message, setMessage] = useState("")

  return (
    <AppLayout title="Chat App">
      <div className="flex h-[calc(100vh-7rem)] flex-col md:flex-row gap-4">
        {/* Sidebar */}
        <Card className="w-full md:w-80 bg-white dark:bg-zinc-800 flex flex-col">
          <div className="p-4 border-b border-zinc-200 dark:border-zinc-700">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
              <Input type="search" placeholder="Search messages..." className="pl-9 bg-white dark:bg-zinc-800" />
            </div>
          </div>

          <div className="flex-1 overflow-auto">
            <div className="p-2">
              <Button variant="ghost" className="w-full justify-start mb-2">
                <Plus className="mr-2 h-4 w-4" />
                New Conversation
              </Button>

              {/* Conversations */}
              <div className="space-y-1">
                {[
                  { name: "Alex Johnson", active: true, unread: 3, time: "12:45 PM", preview: "Hey, how's it going?" },
                  {
                    name: "Sarah Miller",
                    active: false,
                    unread: 0,
                    time: "Yesterday",
                    preview: "Let me know when you're free",
                  },
                  {
                    name: "Team Chat",
                    active: false,
                    unread: 5,
                    time: "Yesterday",
                    preview: "Meeting scheduled for tomorrow",
                  },
                  { name: "David Wilson", active: false, unread: 0, time: "Monday", preview: "Thanks for the update" },
                  {
                    name: "Emma Davis",
                    active: false,
                    unread: 0,
                    time: "Sunday",
                    preview: "Did you see the latest changes?",
                  },
                ].map((chat) => (
                  <div
                    key={chat.name}
                    className={`flex items-center gap-3 p-2 rounded-md cursor-pointer ${
                      chat.active ? "bg-zinc-100 dark:bg-zinc-700" : "hover:bg-zinc-100 dark:hover:bg-zinc-700"
                    }`}
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${chat.name[0]}`} />
                      <AvatarFallback>{chat.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium truncate">{chat.name}</p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">{chat.time}</p>
                      </div>
                      <p className="text-sm truncate text-zinc-500 dark:text-zinc-400">{chat.preview}</p>
                    </div>
                    {chat.unread > 0 && (
                      <div className="h-5 w-5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs flex items-center justify-center">
                        {chat.unread}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Chat Area */}
        <Card className="flex-1 bg-white dark:bg-zinc-800 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-zinc-200 dark:border-zinc-700 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40&text=A" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Alex Johnson</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <AtSign className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-auto p-4 space-y-4">
            <div className="flex items-end gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32&text=A" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
              <div className="bg-zinc-100 dark:bg-zinc-700 p-3 rounded-lg rounded-bl-none max-w-[80%]">
                <p>Hey there! How's it going?</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">12:40 PM</p>
              </div>
            </div>

            <div className="flex items-end gap-2 justify-end">
              <div className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 p-3 rounded-lg rounded-br-none max-w-[80%]">
                <p>Hi Alex! I'm doing well, thanks for asking. Just working on the new project.</p>
                <p className="text-xs text-zinc-300 dark:text-zinc-700 mt-1">12:42 PM</p>
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32&text=U" />
                <AvatarFallback>US</AvatarFallback>
              </Avatar>
            </div>

            <div className="flex items-end gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32&text=A" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
              <div className="bg-zinc-100 dark:bg-zinc-700 p-3 rounded-lg rounded-bl-none max-w-[80%]">
                <p>That sounds great! Do you have time for a quick call later today?</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">12:45 PM</p>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <PaperclipIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <ImageIcon className="h-5 w-5" />
              </Button>
              <div className="relative flex-1">
                <Input
                  placeholder="Type a message..."
                  className="pr-10 bg-white dark:bg-zinc-800"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-10 w-10">
                  <Smile className="h-5 w-5" />
                </Button>
              </div>
              <Button size="icon" className="h-10 w-10">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  )
}

