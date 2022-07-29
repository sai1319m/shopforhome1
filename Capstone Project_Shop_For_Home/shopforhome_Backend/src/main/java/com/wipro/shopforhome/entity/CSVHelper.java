package com.wipro.shopforhome.entity;

	import java.io.BufferedReader;

	import java.io.ByteArrayInputStream;
	import java.io.ByteArrayOutputStream;
	import java.io.IOException;
	import java.io.InputStream;
	import java.io.InputStreamReader;
	import java.io.PrintWriter;
	import java.util.ArrayList;
	import java.util.Arrays;
	import java.util.List;

	import org.apache.commons.csv.CSVFormat;
	import org.apache.commons.csv.CSVParser;
	import org.apache.commons.csv.CSVPrinter;
	import org.apache.commons.csv.CSVRecord;
	import org.apache.commons.csv.QuoteMode;
	import org.springframework.web.multipart.MultipartFile;


	public class CSVHelper {
	  public static String TYPE = "text/csv";
	  static String[] HEADERs = { "pId", "pname", "price", "url","category","stock" };

	  public static boolean hasCSVFormat(MultipartFile file) {
	    if (TYPE.equals(file.getContentType())
	    		|| file.getContentType().equals("application/vnd.ms-excel")) {
	      return true;
	    }

	    return false;
	  }

	  
	  public static List<Product> csvToProducts(InputStream is) {
	   
		  try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
	        CSVParser csvParser = new CSVParser(fileReader,
	            CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());) {

	      List<Product> products = new ArrayList<>();

	      Iterable<CSVRecord> csvRecords = csvParser.getRecords();

	      for (CSVRecord csvRecord : csvRecords) {
	    	  Product product = new Product(
	              Integer.parseInt(csvRecord.get("pId")),
	              csvRecord.get("pname"),
	              Float.parseFloat(csvRecord.get("price")),
	              csvRecord.get("url"),
	              csvRecord.get("category"),
	    		  Integer.parseInt(csvRecord.get("stock"))
	            );

	    	  products.add(product);
	      }

	      return products;
	    } catch (IOException e) {
	      throw new RuntimeException("fail to parse CSV file: " + e.getMessage());
	    }
	  }

	 
	}
