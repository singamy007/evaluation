# Hotel Reservation System

# A dictionary to store room details and their availability , its a global variable 
hotel_rooms = {
    101: {"type": "Single", "price": 100, "available": True},
    102: {"type": "Double", "price": 150, "available": True},
    103: {"type": "Suite", "price": 250, "available": True},
    104: {"type": "Single", "price": 100, "available": True},
    105: {"type": "Double", "price": 150, "available": True}
}

# A dictionary to store bookings: room number mapped to guest details
bookings = {}

def display_rooms():
    """Display available rooms and their details."""
    print("\nAvailable Rooms:")
    print("Room No | Type   | Price | Availability")
    print("----------------------------------------")
    for room, details in hotel_rooms.items(): #so room,details represent key,pair  items means all
        status = "Available" if details["available"] else "Booked"
        print(f"{room:<7} | {details['type']:<6} | ${details['price']:<5} | {status}")
        #if we put 'f' inside print watever inside dict will be printd in {room},

def book_room():
    """Book a room by entering room number and guest details."""
    display_rooms()
    room_number = int(input("\nEnter the room number you want to book: "))
    
    if room_number in hotel_rooms and hotel_rooms[room_number]["available"]:
        name = input("Enter your name: ")
        phone = input("Enter your phone number: ")
        hotel_rooms[room_number]["available"] = False #so roomnumber is set near to availability 
        bookings[room_number] = {"name": name, "phone": phone}
        print(f"Room {room_number} has been successfully booked for {name}.\n")
    else:
        print("Sorry, the room is either not available or invalid.\n")

def view_bookings():
    """View all current bookings."""
    if bookings:
        print("\nCurrent Reservations:")
        print("Room No | Guest Name | Phone Number")
        print("----------------------------------")
        for room, guest in bookings.items():#room, guest is key pair in bookings dict
            print(f"{room:<7} | {guest['name']:<10} | {guest['phone']}")
    else:
        print("\nNo reservations found.")

def cancel_booking():
    """Cancel a room booking."""
    room_number = int(input("\nEnter the room number to cancel the booking: "))
    
    if room_number in bookings:
        guest_name = bookings[room_number]["name"]# adahvadhu guest_name ndra varaible bookings la ulla room numberla ulla per uh ku equal
        del bookings[room_number]
        hotel_rooms[room_number]["available"] = True
        print(f"Booking for {guest_name} in Room {room_number} has been canceled.\n")
    else:
        print("No booking found for the given room number.\n")

def main():
    """Main function to display the menu and handle user choices."""
    while True:
        print("\nHotel Reservation System")
        print("1. View Available Rooms")
        print("2. Book a Room")
        print("3. View Bookings")
        print("4. Cancel Booking")
        print("5. Exit")

        choice = input("Enter your choice (1-5): ")

        if choice == "1":
            display_rooms()
        elif choice == "2":
            book_room()
        elif choice == "3":
            view_bookings()
        elif choice == "4":
            cancel_booking()
        elif choice == "5":
            print("Thank you for using the Hotel Reservation System.")
            break
        else:
            print("Invalid choice. Please enter a number between 1 and 5.\n")

# Run the main function
if __name__ == "__main__":
    main()
