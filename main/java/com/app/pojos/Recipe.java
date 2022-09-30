package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name = "recipes")
public class Recipe {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(length = 512)
	private String name;
	
	@Column(length = 10000)
	private String description;
	
	@Column(length = 512)
	private String cuisine;
	
	@Column(length = 512)
	private String course;
	
	@Column(length = 512)
	private String diet;
	
	@Column(length = 50)
	private String prepTime;
	
	@Column(length = 100000)
	private String instructions;
	
	@Column(length = 512)
	private String imageUrl;

}
