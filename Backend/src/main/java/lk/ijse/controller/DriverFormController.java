package lk.ijse.controller;

import lk.ijse.dto.DriverDTO;
import lk.ijse.entity.DriverSchedule;
import lk.ijse.service.DriverService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("driver")
public class DriverFormController {

    @Autowired
    public DriverService driverService;

    @PostMapping(value = "save_driver",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveDriver(@ModelAttribute DriverDTO driverDTO) {
        driverService.saveDriver(driverDTO);
        return new ResponseUtil("OK", "Successfully Registered !", "");
    }

    @DeleteMapping
    public ResponseUtil deleteDriver(String code) {
        driverService.deleteDriver(code);
        System.out.println(code+" driver service impl");

        return new ResponseUtil("OK", "Successfully Deleted ! " + code, "");
    }

    @GetMapping(value = "get_all",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllDrivers(){
        return new ResponseUtil("OK","Successful",driverService.getAllDriver());
    }

    @PutMapping(value = "update")
    public ResponseUtil updateDriver(@RequestBody DriverDTO driverDTO) {
        driverService.updateDriver(driverDTO);
        return new ResponseUtil("OK", "Successfully updated ! " + driverDTO.getId(), "");
    }

    @GetMapping(path ="/driverCount/{count}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil countDrivers(@PathVariable String count){
        return new ResponseUtil("Ok", "", driverService.countDrivers());
    }

    @GetMapping(params = {"test"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil generateDriverIds(@RequestParam String test) {
        System.out.println(test);
        return new ResponseUtil("Ok", "", driverService.generateDriverIds());
    }

    //TODO *********************************************************
//
//    @GetMapping(value = "get_driver_time_table",produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseUtil getAllDriverTimeTable(){
//        return new ResponseUtil("OK","Successful",driverService.getDriverShedule());
//    }


}
