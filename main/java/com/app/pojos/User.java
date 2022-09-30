package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
@Table(name = "users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	/* @JsonProperty("id") */
	private Integer id;
	@Column(length = 30)
	private String name;
	@Column(length = 30)
	private String email;
	/* @JsonProperty("password") */
	@Column(length = 30)
	private String password;
	@Enumerated(EnumType.STRING)
	@Column(name = "role")
	private Role userRole;
	
}