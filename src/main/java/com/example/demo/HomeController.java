package com.example.demo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class HomeController {

	@GetMapping("/list")
	public List<Map<String, String>> home() {
		List<Map<String, String>> list = new ArrayList<Map<String, String>>();
		Map<String, String> m1 = new HashMap<String, String>();
		m1.put("name", "네오");
		m1.put("addr", "강남");
		m1.put("age", "33");
		list.add(m1);
		
		Map<String, String> m2 = new HashMap<String, String>();
		m2.put("name", "프로도");
		m2.put("addr", "종로");
		m2.put("age", "35");
		list.add(m2);
		
		return list;	
	}
	
	@GetMapping("/hello")
    public List<String> hello() {
        return Arrays.asList("안녕하세요", "Hello");
    }
}


