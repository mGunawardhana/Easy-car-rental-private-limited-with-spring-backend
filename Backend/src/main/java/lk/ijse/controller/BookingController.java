package lk.ijse.controller;

import lk.ijse.dto.CustomerDTO;
import lk.ijse.dto.DriverDTO;
import lk.ijse.service.BookingService;
import lk.ijse.service.CustomerService;
import lk.ijse.service.DriverService;
import lk.ijse.util.ResponseUtil;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    public DriverService driverService;

    @Autowired
    public BookingService bookingService;

    @Autowired
    public CustomerService customerService;
    @GetMapping(path = "/get_all_customers")
    public ResponseUtil getAllCustomersInToTheCombo(@ModelAttribute CustomerDTO customerDTO) {
        System.out.println(bookingService.loadAllCustomersInTheCombo());
        return new ResponseUtil("OK", "Successfully Loaded ! ", bookingService.loadAllCustomersInTheCombo());
    }

    @GetMapping("/get_all_drivers")
    public ResponseUtil getAllItemsInToTheCombo(@ModelAttribute DriverDTO driverDTO) {
        System.out.println(bookingService.loadAllItemsInTheCombo());
        return new ResponseUtil("OK", "Successfully Loaded ! ", bookingService.loadAllItemsInTheCombo());
    }
}